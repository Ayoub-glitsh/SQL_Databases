# 🎓 Centre de Formation Database Project

## 📘 Overview
This project is a **MySQL database system** designed to manage information for a **training center (centre de formation)**.  
It includes the creation of tables, relationships, and sample data for managing **students (stagiaires)**, **trainers (formateurs)**, **courses (formations)**, and **registrations (inscriptions)**.

---

## 🏗️ Project Structure


```bash
      # SQL script that creates and configures the database
      # Documentation for Project 02

    Project_02/
    ├── centreformation.sql
    └── README.md
 

```
---

## 🧩 Database Schema
**Database Name:** `centreformation`

### 🧱 Main Tables
| Table | Description |
|--------|--------------|
| `stagiaire` | Stores student information (name, email, phone, date of birth). |
| `formateur` | Contains trainer details and specializations. |
| `formation` | Defines available training programs. |
| `inscription` | Links students to specific training courses with enrollment dates. |

---

## ⚙️ How to Run the Project
1. Open your SQL environment (MySQL, MariaDB, etc.).
2. Run the script file:
   ```sql
   source centreformation.sql;
