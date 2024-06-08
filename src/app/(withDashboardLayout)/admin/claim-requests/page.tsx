"use client"

import { useGetAllClaimsQuery, useUpdateClaimStatusMutation } from '@/redux/features/claim/claim.Api';
import { message, Select, Skeleton, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect } from 'react';

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

function ClaimStatusAction({ claim }: { claim: any }) {
  const [updateUserStatus, { isSuccess, isError }] = useUpdateClaimStatusMutation()

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
        claimId: claim.id,
        body: {
          status: value
        }
      })
    }
  };

  return (
    <Select
      defaultValue={claim.status}
      size="large"
      className="w-28"
      onChange={handleChange}
      options={[
        { value: 'PENDING', label: 'PENDING' },
        { value: 'APPROVED', label: 'APPROVED' },
        { value: 'REJECTED', label: 'REJECTED' }
      ]}
    />
  )
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
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: ClaimItem) => (
      <ClaimStatusAction claim={record} />
    )
  },
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
