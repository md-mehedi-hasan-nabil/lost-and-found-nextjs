"use client"

import React, { Suspense, useState } from 'react';
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, Spin, theme } from 'antd';
import { LuBaggageClaim, LuLayoutDashboard, LuUserCog } from "react-icons/lu";
import Link from 'next/link';
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiOutlineGateway } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { TbActivity } from "react-icons/tb";
import { getUserInfo } from '@/services/auth.service';
import dynamic from 'next/dynamic';
const DashboardSidebarMenu = dynamic(() => import('@/components/dashboard/DashboardSidebarMenu'), { ssr: false })
const AuthButton = dynamic(() => import('@/components/AuthButton'), { ssr: false })
const { Header, Sider, Content } = Layout;

const adminItems = [
    {
        key: '1',
        icon: <LuLayoutDashboard />,
        label: <Link href="/admin">Dashboard</Link>,
    },
    {
        key: '2',
        icon: <LuLayoutDashboard />,
        label: <Link href="/profile">Profile</Link>,
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
        label: <Link href="/profile">Profile</Link>,
    },
    {
        key: '2',
        icon: <LuBaggageClaim />,
        label: <Link href="/claim-requests">My Claim Requests</Link>,
    },
    {
        key: '3',
        icon: <AiOutlineCarryOut />,
        label: <Link href="/lost-item">My Lost Items</Link>,
    },
    {
        key: '4',
        icon: <AiOutlineGateway />,
        label: <Link href="/found-item">My Found Items</Link>,
    },
    {
        key: '5',
        icon: <MdPassword />,
        label: <Link href="/change-password">Change Password</Link>,
    },
]

const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const user = getUserInfo()

    return (
        <Layout className='h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='my-8 flex justify-center items-center'>
                    <Link href="/">
                        <FaRegCompass className='text-6xl text-white' />
                    </Link>
                </div>
                <Suspense fallback={<Spin />}>
                    <DashboardSidebarMenu />
                </Suspense>
            </Sider>
            <Layout>
                <Header className='flex justify-between items-center'
                    style={{ padding: 0, background: colorBgContainer }}>
                    <div className='flex items-center gap-6'>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <h2 className='text-lg font-semibold'>{getGreeting()}</h2>
                    </div>
                    <div className='pr-6'>
                        <AuthButton />
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}
