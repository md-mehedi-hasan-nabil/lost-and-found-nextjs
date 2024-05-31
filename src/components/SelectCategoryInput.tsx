import { Button, Input, Modal, Select } from 'antd';
import React, { useState } from 'react'

export default function SelectCategoryInput() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='flex gap-2 w-full'>
            <Select
                className="w-full"
                size="large"
                defaultValue="lucy"
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled' },
                ]}
            />
            <Button onClick={showModal} type="primary" size="large">Add</Button>
            <Modal title="Create new category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input size="large" placeholder="Enter category name" className="w-full" />
            </Modal>
        </div>
    )
}
