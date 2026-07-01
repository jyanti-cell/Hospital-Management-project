# 🏥 Hospital Management System

A full-stack Hospital Management System built using **Node.js, Express.js, MongoDB, and Mongoose**. The application enables hospital staff to register patients, securely store records in a MongoDB database, and retrieve patient information efficiently through a simple web interface.

---

## 🚀 Project Migration

This project was originally developed using a **text file (`patient_registry.txt`)** for storing patient records.

As per the updated project requirement, it has been successfully migrated to **MongoDB**.

### Migration Summary

| Previous Version | Updated Version |
|------------------|-----------------|
| File Storage (`patient_registry.txt`) | MongoDB Database |
| Node.js `fs` Module | Mongoose ODM |
| Local Text File | MongoDB Collection |
| Hardcoded Database Logic | Environment Variables (`.env`) |

---

## ✨ Features

- 📝 Register new patients
- 💾 Store patient details in MongoDB
- 📋 View all registered patients
- ⚡ Fast database retrieval using Mongoose
- 🔒 Secure MongoDB connection using `.env`
- 🎨 Responsive user interface
- 📦 Express.js backend

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Frontend |
| CSS3 | Styling |
| Node.js | Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | Database ODM |
| dotenv | Environment Variables |

---

## 📂 Folder Structure

```text
Hospital-Management-project
│
├── app.js
├── index.html
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env (ignored)
```

---

## 📌 Available Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Open Registration Form |
| `/register` | POST | Register Patient |
| `/patients` | GET | Fetch Registered Patients |

---

## 🗄 Database

**Database Name**

```
hospitalDB
```

**Collection**

```
patients
```

### Stored Information

- Patient Name
- Patient Age
- Contact Number
- Admission Date
- Illness

---

## 🔐 Environment Variables

Create a `.env` file.

```env
MONGODB_URI=your_mongodb_connection_string
```

---

## ⚙ Installation

Install dependencies

```bash
npm install
```

Run the application

```bash
node app.js
```

Open

```
http://localhost:5000
```

---

## 📈 MongoDB Operations

### Create

```javascript
await patient.save();
```

### Fetch

```javascript
const patients = await Patient.find();
```

---

## ✅ Improvements After Migration

- Replaced local file storage with MongoDB
- Added Mongoose for database management
- Implemented secure connection using dotenv
- Added `.gitignore`
- Improved scalability and maintainability
- Faster and structured data retrieval

---

## 👩‍💻 Developer

**Jayanti Mishra**

**B.Tech – Information Technology**

---

## 🌟 Acknowledgement

This project was developed as part of academic learning to understand full-stack web development and database integration using MongoDB. It demonstrates the migration of a traditional file-based storage system to a modern NoSQL database solution.

---

## 📬 Feedback

Suggestions and feedback are always welcome. Feel free to explore the project and share your thoughts for further improvements.

---

### ⭐ If you found this project helpful, consider giving it a Star!

Thank you for visiting this repository. Happy Coding! 🚀
