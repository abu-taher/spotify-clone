'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();

    return (
        <div className='bg-black w-[310px] h-[calc(100vh-72px)] hidden lg:block'>
            {/* NAVBAR */}
            <nav className='py-4 px-7'>
                {/* LIST */}
                <ul className='py-3'>
                    {/* HOME LINK */}
                    <li className='py-1'>
                        <Link href='/' className='flex items-center gap-5 h-10'>
                            {/* UNACTIVE SVG */}
                            {pathname !== '/' && (
                                <svg
                                    role="img"
                                    aria-hidden="true"
                                    className="w-6 h-6 fill-darkgray-100"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" />
                                </svg>
                            )}
                            {/* ACTIVE SVG */}
                            {pathname === '/' && (
                                <svg
                                    role="img"
                                    aria-hidden="true"
                                    className="w-6 h-6 fill-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
                                </svg>
                            )}
                            <span className='text-darkgray-100 font-bold'>Home</span>
                        </Link>
                    </li>

                    {/* SEARCH LINK */}
                    <li className='py-1'>
                        <Link href='/search' className='flex items-center gap-5 h-10'>
                            {/* UNACTIVE SVG */}
                            {pathname !== '/search' && (
                                <svg
                                    role="img"
                                    aria-hidden="true"
                                    className="w-6 h-6 fill-darkgray-100"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" />
                                </svg>
                            )}
                            {/* ACTIVE SVG */}
                            {pathname === '/search' && (
                                <svg
                                    role="img"
                                    aria-hidden="true"
                                    className="w-6 h-6 fill-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z" />
                                    <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z" />
                                </svg>
                            )}
                            <span className='text-darkgray-100 font-bold'>Search</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
