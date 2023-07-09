import React, {useState} from 'react'
import List from './List';
import Contacts from './Contacts';
import { v4 as uuidv4 } from 'uuid'
import Add from '@mui/icons-material/AddOutlined';
import CloudOnline from '@mui/icons-material/CloudDoneOutlined';
import CloudOffline from '@mui/icons-material/CloudOffOutlined';

export default function Todolist({ passtodo }) {

    const [isText, setIsText] = useState("");
    const [isTodo, setIsTodo] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isStatus, setIsStatus] = useState(true);

    const getText = (e) => {
        setIsText(e.target.value)
    }

    const createTask = () => {
        if(isText.length === 0) {
            setIsError(true)
        } else {
            setIsError(false)
        }

        const task = {
            id: uuidv4(),
            value: isText
        };

        setIsTodo((arr) => [...arr, task]);
        setIsText("");
    }

    const deleteTask = (id) => {
        setIsTodo(isTodo.filter((todo) => todo.id !== id));
    }

    const switchStatus = () => {
        setIsStatus(!isStatus);
    }

    return (
        <div className={`${passtodo && 'hidden'} todolist`}>
            
            <div className='flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-600 max-mobile-l:py-2'>
                <div className='flex items-baseline text-2xl font-semibold'>
                    Status : <span className={`${isStatus ? 'green' : 'red'} w-4 h-4 rounded-full ml-3`}></span>
                </div>

                <button className='functional_button ' onClick={switchStatus}>
                    {isStatus ? <CloudOnline /> : <CloudOffline />}
                </button>
            </div>

            <div className='flex my-5'>
                <input type="text" placeholder='Ajoutez une tâche...' className='input' onChange={getText} value={isText}/>
                <button className='functional_button' onClick={createTask}><Add /></button>
            </div>

            <p className='text-2xl font-semibold'>Mes tâches</p>
            <div className='max-h-64 overflow-y-auto'>
                {isError && <span className='text-red-500'>Entrez une tâche</span>}
                {isTodo.map((todo) => 
                    <List key={todo.id} todo={todo} err={isError} del={deleteTask} />
                )} 
            </div>

            <Contacts />
            
        </div>
    )
}
