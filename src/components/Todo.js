import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';

const Todo = ({text, todo, todos, setTodos}) => {

    //Delete and completed Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    return(
        <div className="col-12 mt-2">
            <Card>
            <CardBody>
                <div className="todo">
                    <button onClick={completeHandler} className="complete-btn">
                        <i className="far fa-circle"></i>
                    </button>
                    <li className={`todo-item ${todo.completed ? "completed" : ""} `}>{text}</li>
                    
                    <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                    </button>
            </div>
            </CardBody>
        
        </Card>
        </div>
        
        
    );
};

export default Todo;