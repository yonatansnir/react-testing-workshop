import React, { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { deleteTodo, getAllTodos, postNewTodo, updateTodo } from './services/todos';

// Icons
import { RefreshIcon } from './icons/RefreshIcon';
import { Spinner } from "./icons/Spinner";

import "./App.css";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    inProgress: boolean;
}

interface TodosState {
    todos: Todo[],
    isLoading: boolean,
    error: string;
}

export function App() {
    const [state, setState] = useState<TodosState>({ isLoading: true, todos: [], error: '' });
    const [addingTodo, setAddingTodo] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<number>(Date.now())

    const fetchTodos = async () => {
        setState({ isLoading: true, todos: [], error: '' });
        try {
            const todos = await getAllTodos();
            setState({ isLoading: false, todos, error: '' });
        } catch (err) {
            setState({ isLoading: false, todos: [], error: err.message });
        }
    }

    useEffect(() => {
        fetchTodos();
    }, [refresh]);

    const addTodo = async (text: string) => {
        setAddingTodo(true);
        const todo = await postNewTodo(text);
        setState(prev => ({ ...prev, todos: [...prev.todos, todo] }));
        setAddingTodo(false);
    };

    const toggleTodoState = async (id: number, key: 'completed' | 'inProgress') => {
        const todo = state.todos.find(t => t.id === id);
        if (!todo) return;

        todo[key] = !todo[key]
        await updateTodo(todo);
        setState(prev => ({
            ...prev
        }))
    };

    const handleDeleteTodo = async (id: number) => {
        const deletedId = await deleteTodo(id);
        setState(prev => ({ ...prev, todos: prev.todos.filter(t => t.id !== deletedId) }));
    };


    const handleRefresh = () => {
        setRefresh(Date.now());
    }

    const completedCount = state.todos.filter((todo) => todo.completed).length;
    const pendingTasks = state.todos.length - completedCount;
    const progressPercentage = state.todos.length > 0
        ? Math.round((completedCount / state.todos.length) * 100)
        : 0;



    return (
        <div className="app">
            <h1>TODO App <span onClick={handleRefresh}><RefreshIcon /></span></h1>
            <TodoForm addTodo={addTodo} />
            {state.isLoading ? <Spinner /> : state.error ? <div className="error-message">
                <p>{state.error}</p>
            </div> : <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        <span onClick={() => toggleTodoState(todo.id, "completed")} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>}
            {addingTodo && (
                <div className="skeleton">
                    <div className="skeleton-text"></div>
                </div>
            )}
            <div className="stats-section">
                <div>Completed Tasks: {completedCount}</div>
                <div>Pending Tasks: {pendingTasks}</div>
                <div>Task Progress: {progressPercentage}%</div>
            </div>
        </div>
    );
};