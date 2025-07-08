// Import required modules
const express = require('express');
const fs = require('fs');

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Constants
const PORT = 3000;
const FILE_PATH = './todos.json';

// Read the todo list from the local JSON file
function readTodos() {
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

// Write the updated todo list to the JSON file
function writeTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// Route: Fetch all todos
app.get('/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// Route: Create a new todo
app.post('/todos', (req, res) => {
  const todos = readTodos();

  // Create a new todo object with default 'done' status as false
  const newTodo = {
    id: Date.now(),           // Unique identifier based on timestamp
    text: req.body.text,      // Task content from the client
    done: false               // Default status
  };

  todos.push(newTodo);        // Add new todo to the array
  writeTodos(todos);          // Save updated list to file

  res.status(201).json(newTodo); // Respond with the created todo
});

// Route: Update a todo's "done" status
app.patch('/todos/:id', (req, res) => {
  const todos = readTodos();
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).send('Todo not found');
  }

  // Update 'done' status only if provided
  todo.done = req.body.done ?? todo.done;
  writeTodos(todos);

  res.json(todo); // Respond with the updated todo
});

// Route: Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  let todos = readTodos();
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  writeTodos(todos);

  res.status(204).send(); // No content on successful deletion
});

// Start the server and listen on defined port
app.listen(PORT, () => {
  console.log(`🍃 LeafTasks API is running on http://localhost:${PORT}`);
});
