# React + FastAPI JWT Auth Fullstack Project

This is a fullstack authentication app built with **React** (frontend) and **FastAPI** (backend) using **JWTs**.

---

## **Setup**

### 1️⃣ Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on http://127.0.0.1:8000

/token endpoint for login (POST)

/protected endpoint for protected content

cd frontend
npm install
npm start

React app runs on http://localhost:3000

Axios communicates with FastAPI backend for login

Login stores JWT in localStorage

Logout clears JWT and refreshes page

Available Scripts (Frontend)

npm start → runs development server

npm run build → builds production files

Features

JWT-based authentication

Login & logout with page refresh

Protected routes in React

Auto-refresh page to reflect authentication state

Form autofill compatible

FastAPI Documentation

React Documentation

Axios Documentation

React Router v6

