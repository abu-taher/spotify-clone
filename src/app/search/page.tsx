import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
    return (
        
        <div className="bg-gray-500 flex">
            <Sidebar />
            <main className='w-full h-screen overflow-y-auto bg-slate-900'>
                <span className=' text-white'>Search here!</span>
            </main>
        </div>
        
    )
}

export default page
