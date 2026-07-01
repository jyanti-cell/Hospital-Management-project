require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const patientSchema = new mongoose.Schema({
    patientName: String,
    patientAge: Number,
    contactNo: String,
    admissionDate: String,
    illness: String
});

const Patient = mongoose.model("Patient", patientSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", async (req, res) => {

    const patient = new Patient({
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        contactNo: req.body.contactNo,
        admissionDate: req.body.admissionDate,
        illness: req.body.illness
    });

    await patient.save();

    res.send(`
    <html>
    <head>
        <title>Success</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body style="background-color:#f0f2f5;font-family:'Segoe UI';display:flex;align-items:center;justify-content:center;height:100vh;">
        <div style="background:white;padding:35px;border-radius:10px;text-align:center;">
            <h2>🎉 ${req.body.patientName} has been saved successfully!</h2>
            <a href="/">Go to Main Dashboard</a>
        </div>
    </body>
    </html>
    `);
});

app.get("/patients", async (req, res) => {

    const patients = await Patient.find();

    let output = "";

    patients.forEach((p, index) => {
        output += `
Patient ${index + 1}
Name : ${p.patientName}
Age : ${p.patientAge}
Contact : ${p.contactNo}
Admission Date : ${p.admissionDate}
Illness : ${p.illness}

---------------------------------------

`;
    });

    if (output === "") {
        output = "No patients registered yet.";
    }

    res.send(`
    <html>
    <head>
        <title>Registered Patients</title>
        <link rel="stylesheet" href="/style.css">
    </head>

    <body style="background:#f0f2f5;font-family:'Segoe UI';padding:40px;">

        <div style="background:white;padding:30px;border-radius:10px;max-width:700px;margin:auto;">

            <h2>📋 Registered Patients</h2>

            <pre>${output}</pre>

            <a href="/">Go Back</a>

        </div>

    </body>
    </html>
    `);

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});