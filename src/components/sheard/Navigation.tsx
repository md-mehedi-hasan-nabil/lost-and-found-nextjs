import React from 'react';
import { Button, Menu } from 'antd';
import Link from 'next/link';

const items = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about-us"
    }
];

export default function Navigation() {

    return (
        <nav className='shadow-md'>
            <div className='container flex justify-between items-center py-5'>
                <Link href="/" className='font-bold text-2xl text-stone-600'>TrackReclaim</Link>
                <div className='flex gap-6'>
                    <ul className='flex justify-end gap-6 items-center mr-6'>
                        {
                            items.map(item => <li key={item.name}>
                                <Link href={item.path}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                    <div className='flex gap-2'>
                        <Link href="/login">
                            <Button type='primary'>Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Register</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
