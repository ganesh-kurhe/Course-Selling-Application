# 📚 CourseHub – MERN Stack Course Selling Web Application

Welcome to **CourseHub**, a full-stack web application for selling and purchasing online courses. Built using the MERN stack, this platform offers a seamless user experience for both instructors and learners. Secure payments are handled via **Stripe** integration.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [For Learners](#for-learners)
  - [For Instructors/Admin](#for-instructorsadmin)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

---

## 📌 Overview

**CourseHub** allows instructors to create and manage online courses while enabling learners to browse, purchase, and access educational content. It provides a robust and secure infrastructure for online learning, coupled with real-time payments through Stripe.

---

## ✨ Features

### For Learners

- Register and log in securely
- Browse available courses with search and filters
- Purchase courses using secure Stripe payment
- View purchased courses in a personal dashboard
- Access course content (videos, PDFs, etc.)

### For Instructors/Admin

- Instructor/Admin login
- Add new courses with detailed descriptions, thumbnails, and pricing
- Manage (update/delete) course content
- Track user enrollments

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JSON Web Tokens (JWT)  
- **Payments**: Stripe  
- **File Storage**: Cloudinary (for course thumbnails or content, optional)

---

## 🚀 Installation

### 1. Clone the Repository

git clone https://github.com/ganesh-kurhe/Course-Selling-Application.git
cd Course-Selling-Application

### 2. Install Dependencies

 For Server:
 ```bash
 cd backend
 npm install

 For Client:
 ```bash
 cd frontend
 npm install

### 3. Environment Variables

# Create a .env file inside the backend/ directory with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000

# Create a .env file inside the frontend/ directory with:
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

### 4. Run the Application

# Start Backend:
cd backend
npm start

# Start Frontend:
cd frontend
npm start

# The application should now be running a



