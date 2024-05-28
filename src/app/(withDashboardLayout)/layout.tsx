"use client"

import Sidebar from '@/components/dashboard/Sidebar';
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from 'react-icons/md';
import Link from 'next/link';

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
                <div className='my-8'>
                    <p className='text-white text-center'>LOGO</p>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <LuLayoutDashboard />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'All lost Request',
                        },
                        {
                            key: '3',
                            icon: <MdManageAccounts />,
                            label: 'Account',
                        },
                    ]}
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
