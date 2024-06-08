"use client"

import ItemCard from "@/components/ItemCard";
import { useGetAllItemsQuery } from "@/redux/features/item/itemApi"
import { IItem } from "@/types";
import { Spin } from "antd";

export default function FoundItemPage() {
    const { data: foundItems, isSuccess, isLoading } = useGetAllItemsQuery("found")
    let content;

    if (isLoading) {
        content = <Spin />
    } else if (isSuccess && foundItems && foundItems?.data?.length > 0) {
        content = foundItems?.data?.map((item: IItem) => <ItemCard type="found" key={item.id} item={item} />)
    } else {
        content = <p className="col-span-12 mb-5">No item found.</p>
    }

    return (
        <section>
            <h3 className='mb-6 text-3xl font-semibold'>My found items</h3>
            <div className='grid grid-cols-12 gap-6 mt-6'>
                {content}
            </div>
        </section>
    )
}
