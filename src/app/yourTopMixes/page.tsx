import HeaderListing from '@/components/HeaderListing'
import ListingYourTopMixes from '@/components/ListingYourTopMixes'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
    return (
        <>
            <div className="bg-gray-500 flex">
                <Sidebar/>
                <main className='w-full h-[calc(100vh-72px)] overflow-y-auto bg-gray-500'>
                    <HeaderListing/>
                    <ListingYourTopMixes/>
                </main>
            </div>
        </>
    )
}

export default page
