import React from 'react'
import Trash from '@mui/icons-material/DeleteForeverOutlined';

export default function List({ todo, err, del }) {

    const isDeleted = () => {
        del(todo.id);
    };

    return (
        <>
            {!err && 
                <li className='list' id={todo.id}>
                    {todo.value}
                    <button className='functional_button' onClick={isDeleted}>
                        <Trash />
                    </button>
                </li>
            }
        </>
    )
}
