# 🏥 Hospital Management System (HMS)

The **Hospital Management System** is a full-stack MERN application designed to manage hospitals, doctors, patients, and appointments through a clean, modern, fast, and user-friendly interface.

This project has **two separate frontends**:
- **User Frontend (Patient Side)** – Appointment booking & patient view
- **Admin Frontend (Dashboard)** – Hospital management panel (Admin / Staff)

Both frontends are live on hosting.

---

## 🚀 Live Demo Links
### 🔹 **User Frontend (Patients)**
👉 https://mern-stack-hospital-management-syst-zeta.vercel.app/

### 🔹 **Admin Dashboard**
👉 https://mern-stack-hospital-management-syst-topaz.vercel.app/login

---

# 📌 Features

## ⭐ User (Patient) Features
Patients can:
- ✔ View list of available doctors  
- ✔ Book an appointment  
- ✔ Select doctor, date, and preferred time  
- ✔ View appointment confirmation  
- ✔ Get real-time status (Approved / Pending / Completed)  
- ✔ Responsive UI (mobile friendly)

---

## ⭐ Admin Features (Dashboard)
Admin can manage the entire hospital system from the dashboard:

### 🔐 Authentication
- Admin login
- Secure JWT-based authentication

### 🧑‍⚕️ Doctor Management
- Add new doctor  
- Update doctor details  
- Delete doctor  
- View list of all doctors  
- Upload doctor profile image  

### 📅 Appointment Management
- View all appointments  
- Approve / Reject / Complete appointments  
- Assign doctor  
- Manage appointment status  

### 👤 Patient Management (Optional)
- View all registered patients  
- View patient records & history  

### 📊 Dashboard Analytics
- Total doctors  
- Total appointments  
- Pending appointments  
- Approved appointments  
- Completed appointments  

---

# 🛠️ Tech Stack Used

## 🔹 **Frontend**
- React.js  
- React Router  
- Axios  
- Tailwind / Bootstrap  
- React Icons  
- Vercel Deployment  

## 🔹 **Admin Dashboard Frontend**
- React.js  
- Protected Routes  
- Chart / Table Views  
- Vercel Hosting  

## 🔹 **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer (For file uploads)  
- CORS & Middleware  

## 🔹 **Database**
- MongoDB Atlas

---

# 📁 Folder Structure
```
Hospital-Management:
  Front-End:              # User App (Patient Side)
    src/
    public/
    package.json

  Dashboard:              # Admin Panel (Admin/Staff Side)
    src/
    public/
    package.json

  Back-End:               # Node + Express + MongoDB API
    controllers/
    models/
    routes/
    middleware/
    uploads/
    .env
    server.js
```

---

# 🔧 Installation & Setup (Local Development)

## 1️⃣ Clone Repository
git clone https://github.com/dineshupadhyay08/MERN-Stack-Hospital-Management-System.git

cd hospital-management


---

## 2️⃣ Backend Setup
cd Back-End
npm install



### Run Backend
npm start


---

## 3️⃣ User Frontend Setup
cd Front-End
npm install
npm run dev


---

## 4️⃣ Admin Dashboard Setup
cd Dashboard
npm install
npm run dev


---

# 🔐 Admin Login Details (Sample)
Email: Admin@gmail.com
Password: 12345678



---

# 📦 Deployment
Both frontends deployed on **Vercel**, backend deployed on **Render**

---

# 🧑‍💻 Author
**Dinesh Upadhyay**  
Full-Stack MERN Developer  
📧 Email: dineshupadhyay666@gmail.com  
🌐 Portfolio: https://dinesh-upadhyay-portfolio-jbh1.vercel.app/

---

# ⭐ Feedback
Agar aapko project pasand aaya ho to repo ko ⭐ star dena mat bhoolna!
