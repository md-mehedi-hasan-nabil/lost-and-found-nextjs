"use client"

import { useCreateCategoryMutation, useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { Button, Input, message, Modal, Select } from 'antd';
import { Control, Controller } from 'react-hook-form';
import { ReportItemInputs } from '@/types';
import { useEffect, useState } from 'react';

export default function SelectCategoryInput({ control }: {
    control: Control<ReportItemInputs, any>
}) {
    const [createCategory, { isSuccess: isSuccessCreateCategory }] = useCreateCategoryMutation()
    const { data: categories, isSuccess: isSuccessCategories } = useGetAllCategoriesQuery(undefined);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [categoryValue, setCategoryValue] = useState<string>("");

    useEffect(() => {
        if (isSuccessCreateCategory) {
            message.success("Category create successfull.")
            setIsModalOpen(false);
            setCategoryValue("")
        }
    }, [isSuccessCreateCategory])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCategorySubmit = () => {
        if (categoryValue) {
            const obj = {
                name: categoryValue
            }

            createCategory(obj)
        } else {
            message.error("Category field required.")
        }
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
            <Modal title="Create new category" open={isModalOpen} onOk={handleCategorySubmit} onCancel={handleCancel}>
                <Input onChange={e => setCategoryValue(e.target.value)} value={categoryValue} name="name" size="large" placeholder="Enter category name" className="w-full" />
            </Modal>
        </div>
    );
}
