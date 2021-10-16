import React from "react";

const SpecificTodo = ({ todo,deleteTodoHandler,editHandler }) => {
    const { id,title, description } = todo;
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>
                <button type="button" className="btn btn-danger" style={{margin:"5px"}} onClick={e=>deleteTodoHandler(id)}>
                    Delete
                </button>
                <button type="button" className="btn btn-info" style={{margin:"5px"}} onClick={e=>editHandler(id)}>
                    Edit
                </button>
            </td>
        </tr>
    );
};
export default SpecificTodo;
