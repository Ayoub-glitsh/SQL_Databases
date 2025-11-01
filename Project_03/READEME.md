# 🗄️ MySQL Database Project — ex07

## 📘 Overview
This project is a complete **relational database system** built using **MySQL**.  
It represents a small **order management system** that manages clients, products, and their orders.  
The goal of this project is to practice **SQL programming**, including the use of stored procedures, functions, and relational integrity.

---

## 🧱 Database Description

The database is named **`ex07`** and contains three main entities:

### 🧍 1. Client
Stores information about customers.  
**Attributes:**
- `idClient` — Primary Key  
- `Nom` — Last name  
- `Prenom` — First name  
- `Ville` — City  

### 📦 2. Produit
Represents the list of products available.  
**Attributes:**
- `idProduit` — Primary Key  
- `NomProduit` — Product name  
- `PrixUnitaire` — Unit price  

### 🧾 3. Commande
Represents the orders made by clients.  
**Attributes:**
- `idCommande` — Primary Key  
- `idClient` — Foreign Key → Client  
- `idProduit` — Foreign Key → Produit  
- `DateCommande` — Date of the order  

**Relationships:**
- Each *order* must belong to an existing **client**.  
- Each *order* must include a valid **product**.  
- Foreign keys ensure **referential integrity** between tables.

---

## ⚙️ Features and Logic

The project includes several **stored procedures** and **functions** that make the database interactive and intelligent.

### 🔁 Stored Procedures
Used to automate repetitive operations:
- Adding new clients, products, and orders.  
- Listing clients based on criteria such as city or first letter of name.  
- Generating summaries of orders within date ranges.  

### 🧮 Functions
Used to return specific values:
- Check if a client exists.  
- Count the number of clients in a city.  

### 🧠 Control Structures
The project also uses:
- **IF / ELSEIF / CASE** → Conditional logic  
- **LOOP / WHILE** → Iteration through records  
- **Variable declarations** for intermediate computations  

---

## 🧰 Tools & Technologies Used

| Category | Tools / Concepts |
|-----------|------------------|
| 💾 Database Engine | **MySQL** |
| 🧰 Language | **SQL** |
| ⚙️ Tools Used | **phpMyAdmin**, **MySQL Workbench**, or **MySQL CLI** |
| 🧩 Concepts Practiced | Database design, foreign keys, stored procedures, user-defined functions, loops, conditions |

---

## 🧪 What You Can Do with This Database

✅ Add or update data using procedures  
✅ Retrieve all orders by client or period  
✅ Check and classify clients based on order activity  
✅ Count clients by city  
✅ Test and explore advanced SQL logic  

---

## 🧠 Learning Outcomes

Through this project, you will gain practical experience in:
- Designing a relational database schema  
- Implementing procedural logic within SQL  
- Managing data relationships effectively  
- Writing and debugging SQL procedures and functions  

---

## 👨‍💻 Author

**Ayoub Aguezar**  
📍 Morocco  
💡 Full Stack Web Development Student  

---

⭐ *If you find this project useful, consider giving it a star on GitHub!* ⭐
