


# ⚽ Upcoming Matches List – SportsOrca Task

This is a Full Stack project built for the SportsOrca Full Stack Development Internship.

## 📎 Project Summary

A React + Tailwind CSS web app that displays a list of **upcoming soccer matches**.  
Matches are fetched from a **dummy Express backend API** that simulates real match data.

## 🌐 Live Demo

🔗 Frontend Live: [https://your-netlify-link.netlify.app](https://your-netlify-link.netlify.app)

🔗 Backend (Local Only): `http://localhost:4000/matches`

---

## 🔧 Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Design**: Glassmorphism Cards, Responsive Layout

---

## 🚀 Local Setup Guide

### 1. Clone the Repo

```bash
git clone https://github.com/KKumarCoder/sportsorca-matches-task.git
cd sportsorca-matches-task


2. Setup Backend
cd backend
npm install
node server.js
🌐 Server: http://localhost:4000/matches



##3. Setup Frontend

cd ../frontend
npm install
npm run dev
🖥️ App: http://localhost:5173


🔗 API Source (Dummy)
Instead of using the real football API (which requires a paid key), we created a dummy API in server.js that returns match data like this:
[
  {
    "team1": "Arsenal",
    "team2": "Liverpool",
    "date": "2025-06-01T18:30:00Z"
  },
  ...
]
