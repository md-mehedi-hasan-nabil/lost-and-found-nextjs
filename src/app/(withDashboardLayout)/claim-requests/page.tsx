"use client"

import { useGetAllClaimsQuery } from '@/redux/features/claim/claim.Api';
import { Skeleton, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface ClaimItem {
  id: string;
  lostDate: string;
  status: string;
  createdAt: string;
  distinguishingFeatures: string;
  item: {
    image_url: string;
    name: string;
  };
  user: {
    email: string;
    name: string;
    profile: {
      age: number;
      bio: string;
    };
  };
}

const columns: ColumnsType<ClaimItem> = [
  {
    title: 'Item Name',
    dataIndex: ['item', 'name'],
    key: 'itemName',
  },
  {
    title: 'User Name',
    dataIndex: ['user', 'name'],
    key: 'userName',
  },
  {
    title: 'User Email',
    dataIndex: ['user', 'email'],
    key: 'userEmail',
  },
  {
    title: 'Lost Date',
    dataIndex: 'lostDate',
    key: 'lostDate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'PENDING' ? 'orange' : 'green'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Distinguishing Features',
    dataIndex: 'distinguishingFeatures',
    key: 'distinguishingFeatures',
  }
];

export default function ClaimRequestsPage() {
  const { isSuccess, isLoading, data } = useGetAllClaimsQuery(undefined);

  if (isLoading) {
    return <Skeleton />
  }

  if (!isSuccess) {
    return <div>Error loading data</div>;
  }

  const claimData: ClaimItem[] = Array.isArray(data.data) ? data.data : [];

  return (
    <div>
      <Table
        dataSource={claimData}
        columns={columns}
        rowKey="id"
      />
    </div>
  )
}
