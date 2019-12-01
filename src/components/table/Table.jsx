import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table as TableRS , Container } from 'reactstrap';

const Table = () => {
    const store = useSelector(store => store);
    //debugger
    const { todos } = store.todoModule.todos;
    return (
            <Container>
            <TableRS hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Completade</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(elm => (
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.title}</td>
                            <td bgcolor={elm.completed ? 'success ' : 'red'} >{elm.completed ? 'completada' : 'no completada'}</td>
                        </tr>
                    ))}
                </tbody>
            </TableRS>
            </Container>
        );
}

export default Table;