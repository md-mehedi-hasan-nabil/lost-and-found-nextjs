"use client"

import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { handleSearchKeyword, selectCategory } from '@/redux/features/item/itemSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { Input, Select } from 'antd'

export default function LostFoundActionBar() {
    const dispatch = useAppDispatch()
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
        
        categories_list.push({
            value: "",
            label: "All",
        })
    }

    return (
        <div className='flex justify-end items-center'>
            <div className='flex gap-3'>
                <Input size='large' placeholder="Search title description location" onChange={e => dispatch(handleSearchKeyword(e.target.value))} />
                <Select
                    onSelect={value => dispatch(selectCategory(value))}
                    size='large'
                    className='w-56'
                    placeholder="Select Category"
                    onChange={handleChange}
                    options={categories_list}
                />
            </div>
        </div>
    )
}
