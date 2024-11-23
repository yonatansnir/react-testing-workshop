import axios from "axios";
import { Todo } from "../App";

export async function getAllTodos () {
    const { data } = await axios.get<Todo[]>("/api/todos");

    return data;
}

export async function postNewTodo(text: string) {
    const { data } = await axios.post<Todo>("/api/todos", { text });

    return data;
}

export async function updateTodo(todo: Todo) {
    const { data } = await axios.put<{ message: string }>(`/api/todos/${todo.id}`, todo);

    return data;
}

export async function deleteTodo(id: number) {
    const { data } = await axios.delete<{ deletedId: number }>(`/api/todos/${id}`);

    return data.deletedId;
}