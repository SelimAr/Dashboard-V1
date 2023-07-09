import React, {useState} from 'react'
import Todolist from './Todolist'
import ArrowBack from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';

export default function InteractiveSidebar() {

    const [isTodoOpended, setisTodoOpended] = useState(false);

    const isTodoList = () => {
        setisTodoOpended(!isTodoOpended)
    }

    return (
        <div className={`${!isTodoOpended && 'overflow'} interactiveSidebar`}>

            <button className='functional_button hidden max-mobile-l:block absolute top-2 right-[5.5rem] z-50 dark:text-white'
            onClick={isTodoList}>
                {isTodoOpended ? <ArrowBack /> : <ArrowForward />}
            </button>

            <Todolist passtodo={isTodoOpended} />

        </div>
    )
}
