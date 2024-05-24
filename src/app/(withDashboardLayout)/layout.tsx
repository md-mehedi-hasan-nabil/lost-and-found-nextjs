import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react'

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className='h-screen flex'>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )
}
