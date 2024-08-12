import BrowseAll from '@/components/BrowseAll'
import HeaderSearch from '@/components/HeaderSearch'
import RecentSearches from '@/components/RecentSearches'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
    return (
        <div className="bg-gray-500 flex">
            <Sidebar />
            <main className='w-full h-screen overflow-y-auto bg-gray-500'>
                <HeaderSearch/>
                <RecentSearches/>
                <BrowseAll/>
            </main>
        </div>
    )
}

export default page
