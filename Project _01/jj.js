
-- 1)

create database gestion_projets_ouarzazate  ;
use gestion_projets_ouarzazate ;
create table Projet (
id_projet int primary key auto_increment ,
nom_projet varchar(150) not null ,
description text not null ,
budget decimal(12,2) not null ,
etat enum('en cours', 'terminé', 'annulé', 'en attente') not null ,
date_debut date not null ,
date_fin date not null ,
id_cooperative int not null,
foreign key (id_cooperative) references cooperative(id_cooperative)
);

-- 2)

select count(p.id_projet) as `Nombre total des projets` , c.nom_commune as `La commune` from projet p 
inner join cooperative coo on p.id_cooperative = coo.id_cooperative
inner join commune c on coo.id_commune = c.id_commune 
group by c.id_commune;


-- 3)

select p.* , coo.* , c.*    from projet p 
inner join cooperative coo on p.id_cooperative = coo.id_cooperative
inner join commune c on coo.id_commune = c.id_commune ;


-- 4)
 

select p.* , sum(con.montant) as `Le montant total des financements` , f.*  from projet p
inner join contribution con on p.id_projet = con.id_projet
inner join financeur f on con.id_financeur = f.id_financeur 
group by con.id_projet ;


-- 5)


delimiter $$
create procedure ajouter_projet(
  in p_nom varchar(200),
  in p_desc text,
  in p_budget decimal(15,2),
  in p_etat enum('en cours', 'terminé', 'annulé', 'en attente'),
  in p_date_debut date,
  in p_date_fin date,
  in p_id_coop int
)
begin
  insert into projet(nom_projet, description, budget, etat, date_debut, date_fin, id_cooperative)
  values (p_nom, p_desc,  p_budget, p_etat, p_date_debut, p_date_fin, p_id_coop);
end $$
delimiter ;



-- 6) 

delimiter $$
create procedure lister_projets_commune( in p_idcommune int )
begin
  select p.* from projet p
  inner join cooperative coo on p.id_cooperative = coo.id_cooperative
  where coo.id_commune = p_id_commune;
end $$
delimiter ;


-- 7)


delimiter $$
create function total_contributions_projet(p_id_projet int)
returns float 
begin
  declare total float ;
  select sum(montant) into total
  from contribution
  where id_projet = p_id_projet;
  return total;
end $$
delimiter ;


-- 8)

delimiter $$
create function duree_projet(p_id_projet int)
returns int
begin
  declare days int;
  select datediff(date_fin, date_debut) into days
  from projet
  where id_projet = p_id_projet;
  return days;
end $$
delimiter ;


-- 9)

delimiter $$
create function budget_total_projets()
returns float
begin
  declare s float;
  select sum(budget) into s from projet;
  return s;
end $$
delimiter ;

-- 10)

delimiter $$
create trigger suppression 
before delete on projet
for each row
begin
  if (select count(*) from contribution where id_projet = old.id_projet) > 0 then
    signal sqlstate '45000' 
    set message_text = 'suppression interdite : le projet a des financements associés.';
  end if;
end $$
delimiter ;

-- 11)


delimiter $$
create trigger verif_duree_projet
before insert on projet
for each row
begin
    if timestampdiff(year, new.date_debut, new.date_fin) > 3 then
        signal sqlstate '45000'
        set message_text = 'erreur : la durée du projet ne peut pas dépasser 3 ans.';
    end if;
end$$
delimiter ;


-- 12)

delimiter $$

create trigger verif_budget_projet
before update on projet
for each row
begin
    if new.budget > old.budget * 1.5 then
        signal sqlstate '45000'
        set message_text = 'erreur : le nouveau budget ne peut pas dépasser 50% du budget actuel.';
    end if;
end$$

delimiter ;
