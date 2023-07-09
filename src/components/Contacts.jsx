import React from 'react'
import { array } from './dataset/messages'

export default function Contacts() {
    return (
        <div className='mt-2'>

           <p className='text-2xl font-semibold'>Mes messages</p>
            <div className='max-h-64 overflow-y-auto'>
                {array.map((arr, i) =>
                    <div key={i} className='cards'>
                        <img src={arr.avatar} alt="avatar" className='w-16 h-16 rounded-full -left-4 absolute' />
                        <div className='leading-4 h-10 translate-x-12'>
                            <p className='font-semibold'>{arr.name}</p>
                            <p className='text-sm w-[12.5em] truncate'>{arr.msg}</p>
                        </div>
                    </div>
                )}
            </div> 
            
        </div>
    )
}
