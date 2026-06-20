# 🏥 Hospital Patient Registry System ✨

Let's face it—most hospital management systems look like they were built in the 90s with boring gray tables. So, I decided to build a lightweight, fast, and modern Patient Registration system that replaces old-school clunky UIs with a beautiful, futuristic glassmorphism look!

This is a full-stack web application built using **Node.js** and **Express**. It allows hospital staff to smoothly register patients, save their records safely on the server, and view the complete logs with a single click.

---

### 🚀 Key Features (Why this project stands out?)

* **🔮 Stunning Glassmorphic UI:** The form features a premium glassmorphic effect with a vibrant, animated shifting gradient background (`#ff007f` to `#7428ca` to `#00dfd8`). It's beautiful to look at!
* **📦 File-Based Lightweight Database:** No heavy setup or SQL/NoSQL databases needed! The app instantly logs patient data into a local text database (`patient_registry.txt`) using Node's native file system module (`fs`).
* **🛡 Input Validation Security:** All core fields—Patient Name, Age, Contact, Admission Date, and Illness—come with strict frontend `required` validation to prevent blank forms.
* **📂 Auto-Sync Logging:** Every new submission triggers a secure backend `append` stream, preserving old logs while appending fresh data on a clean new line.
* **💻 Responsive and Dynamic UX:** Includes beautiful focus borders, dynamic hover scaling, and full keyboard submit-on-enter configurations for fast data entry.

---

### 📂 Inside the Project (What's in the repo?)

When you pull this project, you'll find a neat structure handling both backend infrastructure and frontend layers:
* `index.html` – The core form structure collecting all critical patient vitals.
* `style.css` – The design engine running animations, fluid responsive metrics, and glassmorphism.
* `server.js` (or app.js) – The Node/Express engine mapping routing behaviors and writing data streams.
* `patient_registry.txt` – Your flat-file database storing continuous logs.
* `package.json` & `package-lock.json` – Explicit dependencies defining the structural Node runtime environment.
* `node_modules/` – Core ecosystem keeping your dependencies running smoothly.

---

### 📸 What the Output Looks Like (UI & Visual Experience)

1. **The Registration Portal (`/`):** A floating, semi-transparent card blurred brilliantly against an active 15-second infinite gradient loop. Clean white inputs turn neon cyan upon selection, guiding the user's eye naturally.
2. **The Success Voucher Screen (`/register`):** After hitting register, a crisp feedback card drops down with a success badge, confirming the patient's record is locked in safely before linking you back home.
3. **The Logs Terminal (`/students`):** A highly organized terminal-style code view showcasing all written files inside a light-gray paper container. If no records exist, the app intelligently renders a custom error screen prompting you to register your first patient.

---

### 🛠 Tech Stack Used

* **Frontend:** HTML5, CSS3 (Keyframes, Animations, Backdrop-filters, CSS Variables).
* **Backend:** Node.js, Express.js (v4.x framework handling route hooks).
* **Storage Engine:** Flat-file stream buffer management via Node's `fs` architecture.

---

### ⚙️ Quick Start (How to run it locally)

1. Clone this repository to your local machine.
2. Open your terminal inside the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Boot up the server:
   ```bash
   node server.js
   ```
4. Open your browser and navigate to `http://localhost:5000` to view the application!

---

### 👨‍💻 Author

Made with ❤️ and clean code practices by **Jayanti Mishra**

---

### 🌟 Drop a Star!

If this UI template helped you understand full-stack Node integration, or if you simply loved the glassmorphic styling, show some support by tapping the **Star (⭐) button** up in the top right corner! Keep coding! 🚀
