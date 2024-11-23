import express from 'express';
import { ViteDevServer } from 'vite';
import { Todo } from "../src/App";

const app = express();
app.use(express.json());

let todos: Todo[] = [
    { id: 1, text: 'Learn React', completed: false, inProgress: false },
    { id: 2, text: 'Learn Testing', completed: false, inProgress: false },
];

// Get all todos
app.get('/api/todos', (req, res) => {
    const rnd = Math.random() * 8 | 0;
    try {
        if (rnd === 0) throw Error('Something wrong');
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new todo
app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    const newTodo: Todo = { id: Date.now(), text, completed: false, inProgress: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;

    todos = todos.map(todo =>
        todo.id === parseInt(id) ? updatedTodo : todo
    );
    res.json({ message: 'Todo updated successfully' });
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    try {
        const index = todos.findIndex((todo) => todo.id === parsedId);
        if (index === -1) throw Error("ID not found");
        todos = todos.filter(todo => todo.id !== parsedId);
        res.json({ deletedId: parsedId });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


export function expressPlugin() {
    return {
        name: 'express-plugin',
        configureServer(server: ViteDevServer) {
            server.middlewares.use(app);
        },
    };
}
