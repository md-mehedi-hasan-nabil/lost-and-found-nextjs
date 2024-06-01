"use client"

import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { Button, Input, Modal, Select } from 'antd';
import { Control, Controller } from 'react-hook-form';
import { ReportItemInputs } from '@/types';
import { useState } from 'react';

export default function SelectCategoryInput({ control }: {
    control: Control<ReportItemInputs, any>
}) {
    const { data: categories, isSuccess: isSuccessCategories } = useGetAllCategoriesQuery(undefined);
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

    let categories_list = [];

    if (isSuccessCategories) {
        categories_list = categories.data.map((category: {
            id: any; name: string
        }) => ({
            value: category.id,
            label: category.name,
        }));
    }

    return (
        <div className="flex gap-2 w-full">
            <Controller
                name="categoryId"
                control={control}
                render={({ field }) => (
                    <Select
                        placeholder="Select category"
                        className="w-full"
                        size="large"
                        defaultValue=""
                        options={categories_list}
                        {...field}
                    />
                )}
            />
            <Button onClick={showModal} type="primary" size="large">
                Add
            </Button>
            <Modal title="Create new category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input name="categoryId" size="large" placeholder="Enter category name" className="w-full" />
            </Modal>
        </div>
    );
}
