import React, { useState } from 'react';
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import { LuBaggageClaim, LuLayoutDashboard, LuUserCog } from "react-icons/lu";
import Link from 'next/link';
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiOutlineGateway } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { TbActivity } from "react-icons/tb";
import { getUserInfo } from '@/services/auth.service';

const adminItems = [
    {
        key: '1',
        icon: <LuLayoutDashboard />,
        label: <Link href="/admin">Dashboard</Link>,
    },
    {
        key: '2',
        icon: <LuLayoutDashboard />,
        label: <Link href="/admin/profile">Profile</Link>,
    },
    {
        key: '3',
        icon: <LuUserCog />,
        label: <Link href="/admin/user-management">User Management</Link>,
    },
    {
        key: '4',
        label: 'Activity Monitoring',
        icon: <TbActivity />,
        children: [
            {
                key: '5',
                icon: <AiOutlineCarryOut />,
                label: <Link href="/admin/lost-item">Lost Items</Link>,
            },
            {
                key: '6',
                icon: <AiOutlineGateway />,
                label: <Link href="/admin/found-item">Found Items</Link>,
            },
        ],
    },

]

const userItems = [
    {
        key: '1',
        icon: <LuLayoutDashboard />,
        label: <Link href="/user">Dashboard</Link>,
    },
    {
        key: '2',
        icon: <LuLayoutDashboard />,
        label: <Link href="/user/profile">Profile</Link>,
    },
    {
        key: '3',
        icon: <LuBaggageClaim />,
        label: <Link href="/user/claim-requests">My Claim Requests</Link>,
    },
    {
        key: '4',
        icon: <AiOutlineCarryOut />,
        label: <Link href="/user/lost-item">My Lost Items</Link>,
    },
    {
        key: '5',
        icon: <AiOutlineGateway />,
        label: <Link href="/user/found-item">Found Items</Link>,
    },
    {
        key: '6',
        icon: <MdPassword />,
        label: <Link href="/user/change-password">Change Password</Link>,
    },
]

export default function DashboardSidebarMenu() {
    const user = getUserInfo()

    return (
        <>
            {
                user && user.role === "ADMIN" ? <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={adminItems}
                /> : <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={userItems}
                />
            }
        </>
    )
}
