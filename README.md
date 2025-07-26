# 🍃 Backend-LeafTasks-Api

A clean and lightweight **todo backend API** built with **Node.js + Express**, using local `.json` file storage. Perfect for minimal full-stack prototypes, personal projects, or educational purposes.


---

## Features

-  No database required – uses `todos.json` as storage
-  Full CRUD: `GET`, `POST`, `PATCH`, `DELETE`
-  Fast to set up and easy to scale
-  Tested using Postman
-  Ideal for frontend/backend integration or learning RESTful APIs

---

## Getting Started

### 1. Clone & Install

```
git clone https://github.com/ricoaprillananda/Backend-LeafTasks-Api.git
cd Backend-LeafTasks-Api
```

```
npm install

Run the Server

Server runs at: http://localhost:3000
```


---

⚗️ API Endpoints/ Test with Postman

```

- Method Endpoint	Description
- GET	/todos Retrieve all todos
- POST /todos	Add a new todo
- PATCH	/todos/:id	Toggle "done" status
- DELETE	/todos/:id	Remove a todo

```

---

Example Request Bodies


🍀 POST
```
json
{
  "text": "Build LeafTasks API 🍃"
}
```

🌼 PATCH
```
json
{
  "done": true
}
```
---

🪽 Tech Stack

- Node.js
- Express.js
- Postman
- Local .json file as data storage (no DB)

---

🍃 Author Rico Aprilla Nanda



