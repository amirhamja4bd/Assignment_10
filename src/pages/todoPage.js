import React from 'react';
import CreateTodo from '../components/todo/createTodo'
import TodoList from '../components/todo/todoList';

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='text-center my-4 text-primary fs-1'>This is my Todo App</h3>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>My Todo App</h5>
                        </div>
                        <div className='card-body'>
                        <CreateTodo />
                        <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;