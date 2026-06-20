const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));

app.get("/", (req,res)=>{
 res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/register", (req,res) => {
 const patientData = `Name:${req.body.patientName}, Age: ${req.body.patientAge}, Contact: ${req.body.contactNo}, Date: ${req.body.admissionDate}, Illness: ${req.body.illness}\n`;
 console.log(patientData);
 fs.appendFileSync("patient_registry.txt",patientData);
 res.send(`
    <html>
    <head>
        <title>Success</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body style="background-color: #f0f2f5; font-family: 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0;">
        <div style="background: white; padding: 35px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); text-align: center; max-width: 400px; width: 100%; border-top: 6px solid #00b894;">
            <h3 style="color: #00b894; margin-top: 0; font-size: 20px; margin-bottom: 20px;">🎉 ${req.body.patientName} has been saved successfully!</h3>
            <a href="/" style="background:#0984e3; color:white; padding:12px 25px; text-decoration:none; border-radius:6px; font-weight:bold; display: inline-block;">Go to main dashboard</a>
        </div>
    </body>
    </html>
 `);
});

app.get("/students", (req,res) => {
  let patients = "";
  if (fs.existsSync("patient_registry.txt")){
   patients = fs.readFileSync("patient_registry.txt", "utf8");
   res.send(`
    <html>
    <head>
        <title>Hospital Registry - Patient Records</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body style="background-color: #f0f2f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px;">
        <div style="background: white; padding: 35px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); max-width: 600px; width: 100%; box-sizing: border-box; border-top: 6px solid #00b894;">
            <h2 style="color: #2d3436; margin-top: 0; margin-bottom: 20px; font-size: 24px; display: flex; align-items: center; gap: 10px;">
                📋 Registered Patients List
            </h2>
            <pre style="font-family: 'Courier New', Courier, monospace; font-size: 15px; background: #f8f9fa; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0; line-height: 1.8; white-space: pre-wrap; color: #2d3436; max-height: 400px; overflow-y: auto;">${patients}</pre>
            <br>
            <div style="text-align: center; margin-top: 10px;">
                <a href="/" style="background: #00b894; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-size: 15px; font-weight: bold; display: inline-block; transition: background 0.2s; box-shadow: 0 2px 5px rgba(0,184,148,0.3);">
                    ← Go to Main Dashboard
                </a>
            </div>
        </div>
    </body>
    </html>
   `);
  } else {
   res.send(`
    <html>
    <head>
        <title>Hospital Registry</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body style="background-color: #f0f2f5; font-family: 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0;">
        <div style="background: white; padding: 35px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); text-align: center; max-width: 400px; width: 100%; border-top: 6px solid #d63031;">
            <h2 style="color: #d63031; margin-top: 0;">🔍 No patients registered yet.</h2>
            <p style="color: #636e72; margin-bottom: 25px;">The registry file is currently empty or hasn't been created yet.</p>
            <a href="/" style="background: #0984e3; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-size: 15px; font-weight: bold; display: inline-block;">
                Go to Main Dashboard
            </a>
        </div>
    </body>
    </html>
   `);
  }
});

app.listen(5000, ()=>{
 console.log("Server is running on 5000");
});