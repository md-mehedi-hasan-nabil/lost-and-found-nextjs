"use client"

import { useGetAllUsersQuery } from "@/redux/features/user/userApi"
import { Skeleton, Table, Tag } from "antd";
import { ColumnsType } from 'antd/lib/table';

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
