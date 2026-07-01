# 🏥 Hospital Management System

A Hospital Patient Registry System developed using **Node.js, Express.js, MongoDB, Mongoose, HTML, and CSS**.

This project was initially developed using a local text file (`patient_registry.txt`) for storing patient records. As per the updated project requirement, the storage system has been migrated to **MongoDB**, making the application more secure, scalable, and database-driven.

---

# 📌 Project Overview

The Hospital Management System allows hospital staff to register patient details through a web interface and store them permanently in a MongoDB database.

The application also provides a feature to fetch and display all registered patients directly from the database.

---

# 🔄 Project Migration

### Previous Version

The first version of this project stored patient records using:

- Node.js File System (fs)
- patient_registry.txt

Data was appended into a text file after every patient registration.

---

### Updated Version

The project has now been upgraded to use:

- MongoDB
- Mongoose
- Dotenv (.env)

Patient information is now stored inside a MongoDB collection instead of a text file.

---

# ✅ Changes Made

- Replaced File System (fs) with MongoDB
- Added Mongoose for database operations
- Added MongoDB Connection
- Added Environment Variables using `.env`
- Added `.gitignore` to hide sensitive credentials
- Removed dependency on `patient_registry.txt`
- Implemented Fetch operation using MongoDB (`Patient.find()`)

---

# ✨ Features

- Register New Patient
- Store Patient Details in MongoDB
- View Registered Patients
- Responsive User Interface
- Secure Database Connection
- Environment Variable Support
- Database Fetch Operation

---

# 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Other Packages

- dotenv

---

# 📁 Project Structure

```
Hospital-Management-project
│
├── app.js
├── index.html
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env (Not Uploaded)
```

---

# 📂 Database

Database Name

```
hospitalDB
```

Collection Name

```
patients
```

Stored Fields

- Patient Name
- Patient Age
- Contact Number
- Admission Date
- Illness

---

# 🌐 Application Routes

| Route | Method | Description |
|--------|--------|-------------|
| / | GET | Open Registration Form |
| /register | POST | Save Patient Details |
| /patients | GET | Fetch and Display Registered Patients |

---

# 🔒 Environment Variables

MongoDB connection string is stored securely inside the `.env` file.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

The `.env` file is ignored using `.gitignore`.

---

# 📦 Installation

Install Dependencies

```bash
npm install
```

Install Required Packages

```bash
npm install express mongoose dotenv
```

Run Project

```bash
node app.js
```

Open Browser

```
http://localhost:5000
```

---

# 📊 MongoDB Operations Used

### Create

```javascript
patient.save();
```

### Read (Fetch)

```javascript
Patient.find();
```

---

# 🎯 Project Outcome

The project successfully migrates patient data storage from a traditional text file system to MongoDB.

This improves:

- Data Security
- Scalability
- Maintainability
- Database Management
- Real-Time Data Retrieval

---

# 👩‍💻 Developed By

**Jayanti Mishra**

B.Tech (Information Technology)

---

⭐ Thank you for visiting this repository.
