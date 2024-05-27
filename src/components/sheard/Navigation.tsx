import React from 'react';
import { Avatar, Button, Dropdown, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';

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

const userItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href="/profile">
               Profile
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Button>
                Logout
            </Button>
        ),
    }
];


export default function Navigation() {

    return (
        <nav className='shadow-md'>
            <div className='container flex justify-between items-center py-5'>
                <Link href="/" className='font-bold text-2xl text-stone-700'>TrackReclaim</Link>
                <div className='flex gap-6'>
                    <ul className='flex justify-end gap-6 items-center mr-6'>
                        {
                            items.map(item => <li key={item.name}>
                                <Link href={item.path}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                    <div className='flex items-center gap-2'>
                        <Link href="/login">
                            <Button type='primary'>Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Register</Button>
                        </Link>
                        <Dropdown menu={{ items: userItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};
