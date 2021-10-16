import React, { useState, useEffect } from "react";

const AddTodo = ({ todo, onAddTodoHandler, editId, updateTodoHandler }) => {
    const initialState = {
        title: todo.title ? todo.title : "",
        description: todo.description ? todo.description : "",
    };
    const [addTodo, addSetTodo] = useState(initialState);
    const { title, description } = addTodo;

    const inputHandler = (e) => {
        addSetTodo({
            ...addTodo,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        addSetTodo(initialState);
    }, [todo.title, todo.description]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (editId === null) {
            onAddTodoHandler(addTodo);
            addSetTodo({
                title: "",
                description: "",
            });
        } else {
            updateTodoHandler(addTodo);
            addSetTodo({
                title: "",
                description: "",
            });
        }
    };

    return (
        <form onSubmit={addTodoHandler}>
            <div className="form-group" style={{ marginTop: "10px" }}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    id="title"
                    name="title"
                    value={title}
                    onChange={inputHandler}
                />
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
                <label htmlFor="description">Description:</label>
                <textarea
                    className="form-control"
                    rows="4"
                    id="comment"
                    id="description"
                    name="description"
                    value={description}
                    onChange={inputHandler}
                ></textarea>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
            >
                {editId === null ? "Add To do" : "Update Todo"}
            </button>
        </form>
    );
};
export default AddTodo;