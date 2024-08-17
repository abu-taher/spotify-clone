"use client";

import HeaderListing from '@/components/HeaderListing'
import ListingMadeForYou from '@/components/ListingMadeForYou'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

function Page() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <div className="bg-gray-500 flex">
                <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                <main className='w-full h-[calc(100vh-72px)] overflow-y-auto bg-gray-500'>
                    <HeaderListing setOpenSidebar={setOpenSidebar} />
                    <ListingMadeForYou />
                </main>
            </div>
        </>
    )
}

export default Page
