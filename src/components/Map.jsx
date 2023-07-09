import React from 'react'
import { array } from './dataset/menu'

export default function Map({ passdata }) {
    return (
        <>
            {array.map((arr, i) => 
                <div key={i} className={`${!passdata && 'flex justify-center my-6 w-fit mx-auto'} map`}>
                    <li className='p-3 rounded-md flex items-center max-mobile-l:p-1'>
                        {arr.icon}
                    </li>
                    <li className={`${!passdata && 'hidden'} px-2`}>
                        {arr.name}
                    </li>
                </div>
            )}
        </>
    )
}
