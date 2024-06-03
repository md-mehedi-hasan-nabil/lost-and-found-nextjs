"use client"

import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import { LuLayoutDashboard, LuUserCog } from "react-icons/lu";
import { MdManageAccounts } from 'react-icons/md';
import Link from 'next/link';
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiOutlineGateway } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { TbActivity } from "react-icons/tb";

const { Header, Sider, Content } = Layout;

const items: MenuProps['items'] = [
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
            <button>
                Logout
            </button>
        ),
    }
];

const adminItems = [
    {
        key: '1',
        icon: <LuLayoutDashboard />,
        label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
        key: '2',
        icon: <LuUserCog />,
        label: <Link href="/dashboard/user-management">User Management</Link>,
    },
    {
        key: '3',
        icon: <TbActivity />,
        label: <Link href="/dashboard/activity-monitoring">Activity Monitoring</Link>,
    }
]

const userItems = [
    {
        key: '1',
        icon: <LuLayoutDashboard />,
        label: <Link href="/profile">Profile</Link>,
    },
    {
        key: '2',
        icon: <AiOutlineCarryOut />,
        label: <Link href="/lost-item">My Lost Items</Link>,
    },
    {
        key: '3',
        icon: <AiOutlineGateway />,
        label: <Link href="/found-item">My Found Items</Link>,
    },
    {
        key: '4',
        icon: <MdManageAccounts />,
        label: <Link href="/edit-profile">Edit Profile</Link>,
    },
    {
        key: '5',
        icon: <MdPassword />,
        label: <Link href="/change-password">Change Password</Link>,
    },
]

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='my-8 flex justify-center items-center'>
                    <Link href="/">
                        <FaRegCompass className='text-6xl text-white' />
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={adminItems}
                />
            </Sider>
            <Layout>
                <Header className='flex justify-between items-center' style={{ padding: 0, background: colorBgContainer }}>
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
                        <h2 className='text-lg font-semibold'>Good Morning</h2>
                    </div>
                    <div className='pr-6'>
                        <Dropdown menu={{ items }} placement="bottomRight" arrow>
                            <Avatar icon={<UserOutlined />} />
                        </Dropdown>
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
