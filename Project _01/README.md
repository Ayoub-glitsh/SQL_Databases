
# 📚 First Exam Project: Gestion des Projets Ouarzazate (Ouarzazate Project Management)

## Introduction

This repository contains the SQL scripts for a database project designed for my **first exam** in the **Management of Databases module**. The project focuses on utilizing **Relational Database** concepts, implemented in **MySQL/MariaDB**, to track and manage various projects in Ouarzazate.

The scripts demonstrate proficiency in database fundamentals, including schema definition, complex reporting, and implementing advanced database objects like Stored Procedures, User-Defined Functions (UDFs), and Triggers to ensure data integrity and automate operations.

***
**👉 Note:** The full set of exam files, including the original prompt, can be downloaded via the following link: **[https://drive.google.com/file/d/1cxIepeqquF3_KIBkNaFahKFQaA2ZoQkV/view?usp=sharing]**
***

---

## 🚀 Getting Started

### Prerequisites

You will need a functional **MySQL** or **MariaDB** database server to execute these scripts.

### Installation Steps

1.  **Create and Select the Database:**
    ```sql
    CREATE DATABASE gestion_projets_ouarzazate;
    USE gestion_projets_ouarzazate;
    ```
2.  **Define Core Tables (Dependencies):**
    * *Note: The primary `Projet` table relies on four other tables: `cooperative`, `commune`, `contribution`, and `financeur`. You must ensure these tables and their respective primary keys (`id_cooperative`, `id_commune`, `id_financeur`) are created before proceeding with the `Projet` table definition.*
3.  **Create the `Projet` Table:**
    ```sql
    CREATE TABLE Projet (
        id_projet INT PRIMARY KEY AUTO_INCREMENT,
        nom_projet VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        budget DECIMAL(12,2) NOT NULL,
        etat ENUM('en cours', 'terminé', 'annulé', 'en attente') NOT NULL,
        date_debut DATE NOT NULL,
        date_fin DATE NOT NULL,
        id_cooperative INT NOT NULL,
        FOREIGN KEY (id_cooperative) REFERENCES cooperative(id_cooperative)
    );
    ```
4.  **Execute Database Logic:**
    Run the remaining SQL script sections (Procedures, Functions, and Triggers) to fully deploy all defined database logic.

---

## 🛠️ Key Database Logic (Exam Requirements)

### Stored Procedures

| Procedure Name | Description |
| :--- | :--- |
| `ajouter_projet` | **Adds a new project** record. |
| `lister_projets_commune` | **Lists all projects** linked to cooperatives in a specific commune (via `id_commune`). |

### User-Defined Functions (UDFs)

| Function Name | Returns | Description |
| :--- | :--- | :--- |
| `total_contributions_projet` | `FLOAT` | Calculates the **total financial contributions** for a project. |
| `duree_projet` | `INT` | Calculates the **duration of a project in days**. |
| `budget_total_projets` | `FLOAT` | Calculates the **sum of all project budgets** in the database. |

### Data Integrity Triggers

| Trigger Name | Timing & Event | Integrity Rule Enforced |
| :--- | :--- | :--- |
| `suppression` | `BEFORE DELETE` on `Projet` | **Prevents deletion** if the project has recorded contributions (Referential Integrity Check). |
| `verif_duree_projet` | `BEFORE INSERT` on `Projet` | **Blocks insertion** if project duration exceeds **3 years** (Business Rule Constraint). |
| `verif_budget_projet`| `BEFORE UPDATE` on `Projet` | **Restricts budget updates** if the new budget is more than **50% greater** than the old one (Financial Constraint). |

---

## 🔎 Reporting and Analysis Queries

These complex `SELECT` queries were a key part of the exam, demonstrating proficiency with multi-table `JOIN`s, aggregation, and grouping.

### 1. Project Count per Commune

```sql
SELECT
    COUNT(p.id_projet) AS `Total Number of Projects`,
    c.nom_commune AS `Commune`
FROM Projet p
INNER JOIN cooperative coo ON p.id_cooperative = coo.id_cooperative
INNER JOIN commune c ON coo.id_commune = c.id_commune
GROUP BY c.id_commune;
