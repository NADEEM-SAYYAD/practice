import React from "react";
import SepecificTodo from "../todo/SepecificTodo";
import NorecordsFound from "../todo/NorecordsFound";
import TableHeader from "../todo/TableHeader";

const ListTodos = ({todos,deleteTodoHandler,editHandler}) => {
    return (
        <div style={{marginTop:"10px"}}>
            <table className="table table-bordered">
                <thead>
                    <TableHeader headerFields={['Title','Description','Action']}/>
                </thead>
                <tbody>
                    {
                        todos.length > 0 
                        ? React.Children.toArray(todos.map(todo=><SepecificTodo todo={todo} deleteTodoHandler={deleteTodoHandler} editHandler={editHandler}/>)) 
                        :(<NorecordsFound />)
                    }
                </tbody>
            </table>
        </div>
    );
};
export default ListTodos;
