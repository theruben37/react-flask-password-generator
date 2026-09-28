# React + Flask Password Generator

A password generator built with a React frontend and a Flask (Python) backend, with adjustable length and character type (lowercase, uppercase, symbols, or all).

## Features
- Choose character type: lowercase, uppercase, symbols, or all combined
- Set password length (6–12 characters)
- No repeated characters in a generated password
- Frontend (React) and backend (Python) are fully separate, connected over HTTP

## Tech stack
- **Frontend:** React + Vite
- **Backend:** Python + Flask

## Setup

### Backend
```powershell
cd backend
python -m venv venv
venv\Scripts\Activate.ps1      # macOS/Linux: source venv/bin/activate
pip install flask
python app.py
```
Runs on `http://127.0.0.1:5000`.

### Frontend
```powershell
cd my-app
npm install
npm run dev
```
Runs on `http://localhost:5173`.

**Both servers need to be running at the same time**, in separate terminals.

## Usage
1. Open `http://localhost:5173` in your browser.
2. Select a character type.
3. Enter a password length between 6 and 12.
4. Click **Generate**.

## Project structure
