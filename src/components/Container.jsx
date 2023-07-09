import React from 'react'
import Copy from '@mui/icons-material/ContentCopyOutlined';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, 
Filler, Tooltip, Legend } from "chart.js";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import { DataLine, OptionsLine, DataVerticalBar, OptionsVerticalBar, DataDoughnut, OptionsDoughnut, DataRadar, OptionsRadar}
from "./dataset/data"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale,
Filler, Tooltip, Legend);

export default function Container() {
    return (
        <div className='w-full h-full flex justify-center flex-wrap m-2 rounded-md bg-zinc-100 dark:bg-zinc-900 max-mobile-l:m-0'>

            <div className='flex justify-center flex-wrap my-2'>
                <Radar className='charts max-w-xs max-h-60' data={DataRadar} options={OptionsRadar} />
                <div className='charts min-w-[20rem] max-w-xs '>
                    <button className='float-right my-1 functional_button'><Copy /></button>
                    <div className='text-center p-1'>
                        <p className='text-5xl font-semibold mb-1 mt-16'>256 798€</p>
                        <p className='text-xl font-medium mb-8'>Capitaux DEX</p>
                        <p className='text-md font-small text-zinc-500 leading-5'>
                            Un DEX est un protocole dans lequel vous pouvez acheter et vendre des crypto...
                        </p>
                    </div>
                </div>
                <Doughnut className='charts max-w-xs max-h-60' data={DataDoughnut} options={OptionsDoughnut} />
            </div>

            <div className='flex justify-center flex-wrap my-2'>
                <Line className='charts ' data={DataLine} options={OptionsLine} />
                <Bar className='charts ' data={DataVerticalBar} options={OptionsVerticalBar} />
            </div>
            
        </div>
    )
}
