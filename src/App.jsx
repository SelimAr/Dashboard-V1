import Sidebar from './components/Sidebar';
import Main from './components/Main';
import InteractiveSidebar from './components/InteractiveSidebar'

export default function App() {
    return (
        <div className='flex bg-white dark:bg-black w-full h-full'>
            <Sidebar />
            <Main />
            <InteractiveSidebar />
        </div>
    )
}
