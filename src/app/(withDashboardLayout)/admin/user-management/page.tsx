"use client"

import { useUpdateUserStatusMutation } from "@/redux/features/admin/adminApi";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi"
import { message, Select, Skeleton, Table, Tag } from "antd";
import { ColumnsType } from 'antd/lib/table';
import { useEffect } from "react";

function UserStatusAction({ user }: { user: any }) {
    const [updateUserStatus, { isSuccess, isError }] = useUpdateUserStatusMutation()

    useEffect(() => {
        if (isSuccess) {
            message.success('User status update successful.');
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            message.error('User status update failed');
        }
    }, [isError])

    const handleChange = (value: string) => {
        if (value) {
            updateUserStatus({
                userId: user.id,
                body: {
                    status: value
                }
            })
        }
    };

    return (
        <Select
            defaultValue={user.status}
            size="large"
            className="w-28"
            onChange={handleChange}
            options={[
                { value: 'ACTIVATE', label: 'ACTIVATE' },
                { value: 'DEACTIVATE', label: 'DEACTIVATE' }
            ]}
        />
    )
}

interface IUser {
    id: string;
    email: string;
    name: string;
    role: "USER" | "ADMIN";
    profile: {
        id: string
        userId: string
        bio: string;
        age: number;
    }
}

const columns: ColumnsType<IUser> = [
    {
        title: 'Name',
        dataIndex: ['name'],
        key: 'Name',
    },
    {
        title: 'Email',
        dataIndex: ['email'],
        key: 'Email',
    },
    {
        title: 'User Role',
        dataIndex: ['role'],
        key: 'role',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => (
            <Tag color={status === 'ACTIVATE' ? 'blue' : 'red'}>
                {status.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Bio',
        dataIndex: ["profile", "bio"],
        key: 'bio',
    },
    {
        title: 'Age',
        dataIndex: ["profile", "age"],
        key: 'age',
    },
    {
        title: 'Created At',
        dataIndex: ['profile', 'createdAt'],
        key: 'createdAt',
    },
    { 
        title: 'Action',
        key: 'action',
        render: (_: any, record: IUser) => (
            <UserStatusAction user={record} />
        )
    },
];

export default function UserManagementPage() {
    const { data: users, isLoading, isSuccess } = useGetAllUsersQuery(undefined)

    if (isLoading) {
        return <Skeleton />
    }

    if (!isSuccess) {
        return <div>Error loading data</div>;
    }

    const claimData: IUser[] = Array.isArray(users?.data) ? users?.data : [];

    return (
        <section>
            <Table
                dataSource={claimData}
                columns={columns}
                rowKey="id"
            />
        </section>
    )
}
