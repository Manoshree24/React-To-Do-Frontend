# To-Do Application

A full-stack To-Do app built with React(frontend) and Node.js + Express (backend).  
Data is stored in memory on the server (no database), matching the assignment requirements.

## GitHub Repositories

- **Frontend Repo:** [react-to-do-frontend](https://github.com/Manoshree24/react-to-do-frontend)  
- **Backend Repo:** [full-stack-to-do-backend](https://github.com/Manoshree24/full-stack-to-do-backend)

---
##  Features

- Add new to-do items  
- View all to-dos with empty-state messaging  
-  Mark items as completed (visual line-through)  
-  Delete items  
- Clean, responsive UI  

---
##  Tech Stack

-  **Frontend:** React, Axios, CSS  
-  **Backend:** Node.js, Express, CORS  
-  **Data Store:** In-memory (no database)  
-  **Runtime:** Node.js 18+ recommended  

---
## Live Demo :

If deployed, replace this with your URL:  
- **Frontend Live:** https://react-to-do-frontend.vercel.app/
- **Backend Live:** https://full-stack-to-do-app-3ni2.onrender.com/

---

## Project Structure

```bash
<your-repo>/
├── backend/
│   ├── index.js           # Express server with in-memory store
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── components/
    │       ├── AddTodo.jsx
    │       ├── TodoItem.jsx
    │       └── TodoList.jsx
    └── package.json


 Getting Started
1. Clone the repository
# Clone Frontend
git clone https://github.com/Manoshree24/react-to-do-frontend.git
cd react-to-do-frontend

# In another terminal, clone Backend
git clone https://github.com/Manoshree24/Full-stack-To-Do-App.git
cd full-stack-to-do-backend

2. Start the Backend (API)
cd backend
npm install
npm run dev       # starts API at http://localhost:5000
You should see: Server running on http://localhost:5000
Test the API in browser: http://localhost:5000/api/todos → returns [] initially.
3. Start the Frontend (React)
Open a new terminal window:
cd frontend
npm install
npm start         # opens at http://localhost:3000 
If the port changes, update the API base URL in src/App.jsx for Axios requests.


 API Endpoints
Base URL: http://localhost:5000
Method	Endpoint	Body (JSON)	Description	Response (200/201)
GET	/api/todos	—	Get all to-dos	[ { id, text, completed } ]
POST	/api/todos	{ "text": "Buy milk" }	Create a new to-do	{ id, text, completed }
PUT	/api/todos/:id	{ "completed": true }	Update completed status	{ id, text, completed }
DELETE	/api/todos/:id	—	Delete a to-do by ID	(204 No Content)
Example cURL Commands:
# Create
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text":"Walk the dog"}'

# Toggle complete
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Delete
curl -X DELETE http://localhost:5000/api/todos/1
 Data is in-memory and resets when the backend restarts.

 Screenshots
Add your screenshots inside an assets/ folder:
 <img width="464" height="323" alt="image" src="https://github.com/user-attachments/assets/b57deb71-3139-47bb-a184-9853d1b18635" />

<img width="530" height="296" alt="image" src="https://github.com/user-attachments/assets/45362490-1d86-4d64-b95b-1a33cf60887b" />

 
 Troubleshooting
•	React Port 3000 already in use:
o	Press Y when prompted to switch port, or free it:
o	netstat -ano | findstr :3000
o	taskkill /PID <PID_FROM_ABOVE> /F
•	CORS / Connection Errors:
o	Confirm backend is running at http://localhost:5000
o	Ensure app.use(cors()) and express.json() are in backend/index.js
•	Axios Not Found:
•	npm install axios   # Run this in frontend folder
•	WebSocket / HMR errors on port 3000:
o	Harmless or restart frontend on 3000.
•	/favicon.ico 404:
o	Optional: Add a blank response route in Express:
o	app.get('/favicon.ico', (req, res) => res.sendStatus(204));

 Scripts
Backend
npm run dev     # start with nodemon (auto-reload)
npm start       # start with plain node
Frontend
npm start       # React dev server
npm run build   # Create production build

 Deployment 
You can deploy to:
•	Frontend: Netlify, Vercel
•	Backend: Render, Railway, Glitch
Update the Axios base URL to match your deployed backend.


License

This project is licensed under the MIT License.


##  Acknowledgements

Built as part of the “Simple To-Do Application” fullstack assignment  
using React, Node.js, and Express.
