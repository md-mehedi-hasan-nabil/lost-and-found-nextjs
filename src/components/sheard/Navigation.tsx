"use client";

import Link from 'next/link';
import logo from "@/assets/logo.svg"
import Image from 'next/image';
import dynamic from 'next/dynamic';
const AuthButton = dynamic(() => import('../AuthButton'), { ssr: false })

const items = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about-us"
    },
    {
        name: "Recent Posts",
        path: "/recent-lost-item"
    },
];


export default function Navigation() {
    return (
        <nav className='shadow-md sticky top-0 z-30 bg-stone-100'>
            <div className='container flex justify-between items-center py-5'>
                <Link href="/" className='font-bold text-2xl text-stone-700'>
                    <Image src={logo} alt="logo" />
                </Link>
                <div className='flex gap-6'>
                    <ul className='flex justify-end gap-6 items-center mr-3'>
                        {
                            items.map(item => <li key={item.name}>
                                <Link href={item.path}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
};
