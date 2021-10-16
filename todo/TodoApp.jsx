import React, { useState,useEffect } from "react";
import TodoForm from "./TodoForm";
import ListTodos from "./ListTodos";
import {useStoreValToLocStorage} from "../storage/useStoreValToLocStorage"

export const TodoApp = () => {
    const [todos, setTodos] = useStoreValToLocStorage('mytodos',[]);
    const [todo, setTodo] = useState({
        title: "",
        description: "",
    });
    const [editId, setEditId] = useState(null);

    const addTodoHandler = (obj) => {
        if (obj) {
            let newObj = {
                id : todos.length + 1,
                ...obj
            }
            setTodos([newObj, ...todos]);
        }
    };
    const deleteTodoHandler = (id) => {
        const filtered = todos.filter((t) => t.id !== id);
        setTodos(filtered);
    };
    const editHandler = (id) => {
        const filtered = todos.filter((t) => t.id === id)[0];
        setEditId(id);
        setTodo(filtered);
    };

    const updateTodoHandler = (obj) => {
        const filtered = todos.map((t) =>
            t.id === editId ? { ...t, ...obj } : t
        );
        setTodos(filtered);
        setEditId(null);
        setTodo({
            title: "",
            description: "",
        });
    };

    return (
        <div className="container">
            <TodoForm
                todo={todo}
                onAddTodoHandler={addTodoHandler}
                editId={editId}
                updateTodoHandler={updateTodoHandler}
            />
            <ListTodos
                todos={todos}
                deleteTodoHandler={deleteTodoHandler}
                editHandler={editHandler}
            />
        </div>
    );
};

export default TodoApp;
