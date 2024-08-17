'use client';
import BrowseAll from '@/components/BrowseAll'
import HeaderSearch from '@/components/HeaderSearch'
import RecentSearches from '@/components/RecentSearches'
import ShowSearchResults from '@/components/ShowSearchResults'
import Sidebar from '@/components/Sidebar'
import { useSearchStore } from '@/store/useSearchStore'
import React from 'react'

function Page() {
    const { query } = useSearchStore();
    return (
        <>
            <div className="bg-gray-500 flex">
                <Sidebar />
                <main className='w-full h-[calc(100vh-72px)] overflow-y-auto bg-gray-500'>
                    <HeaderSearch/>
                    {query.length < 4 && <RecentSearches />}
                    <ShowSearchResults/>
                    {query.length < 4 && <BrowseAll/>}
                </main>
            </div>
        </>
    )
}

export default Page