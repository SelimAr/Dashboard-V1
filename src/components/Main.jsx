import React from 'react'
import Container from './Container';
import Refresh from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';

export default function Main() {
    return (
        <div className='main'>
            
            <div className='text-4xl font-semibold text-left my-5 mx-3 flex justify-between items-center max-mobile-l:my-2
            max-mobile-l:text-3xl'>
                Bonjour Selim,
                <div className='flex mt-1.5'>
                  <button className='functional_button bg-transparent dark:bg-transparent'>
                        <Refresh />
                    </button>  
                    <button className='functional_button bg-transparent dark:bg-transparent'>
                        <EditIcon />
                    </button>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <Container />
            </div>
            
        </div>
    )
}
