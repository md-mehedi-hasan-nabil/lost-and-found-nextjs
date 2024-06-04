"use client"

import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { Input, Select } from 'antd'

export default function LostFoundActionBar() {
    const { data: categories, isSuccess: isSuccessCategories } = useGetAllCategoriesQuery(undefined);

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
        <div className='flex justify-end items-center'>
            <div className='flex gap-3'>
                <Input size='large' placeholder="Search item with description" />
                <Select
                    size='large'
                    className='w-56'
                    onChange={handleChange}
                    options={categories_list}
                />
            </div>
        </div>
    )
}
