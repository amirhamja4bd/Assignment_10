import React from 'react';
import { useSelector } from 'react-redux';
import {todoDeleteAlert} from './todoDeleteAlert'
import {todoEditAlert} from './todoEditAlert'

const TodoList = () => {

    const todoItems = useSelector((state) => state.todo.value);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item, i) => {
                                    return (
                                        <tr>
                                            <td>{i}</td>
                                            <td>{item}</td>
                                            <td><button onClick={()=>{todoEditAlert(i,item)}} className='btn btn-warning btn-sm px-4'>Edit</button></td>
                                            <td><button onClick={()=>{todoDeleteAlert(i)}} className='btn btn-danger btn-sm px-4'>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;