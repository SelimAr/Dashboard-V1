import React, { useState, useEffect } from 'react'
import Map from './Map';
import ArrowBack from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';
import Light from '@mui/icons-material/BedtimeOutlined';
import Night from '@mui/icons-material/Bedtime';

export default function Sidebar() {

    const [theme, setTheme] = useState("light");
    const [open, setIsOpen] = useState(true);

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add('dark');            
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const darkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const isOpen = () => {
        setIsOpen(!open)
    }

    return (
        <div className='sidebar'>

            <div className='flex justify-between items-center border-b border-zinc-200 dark:border-zinc-600 py-3'>
                <button className='functional_button' onClick={darkMode}>{theme === "dark" ? <Night /> : <Light />}</button>
                <button className='functional_button' onClick={isOpen}>{open ? <ArrowBack /> : <ArrowForward />}</button>
            </div>

            <div className='text-center list-none'>
                <Map passdata={open} />
            </div>
            
        </div>
    )
}
