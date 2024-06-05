import { useGetAllItemsQuery } from "@/redux/features/item/itemApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { RootState } from "@/redux/store/store";
import { IItem } from "@/types";
import ItemCard from "./ItemCard";
import { Skeleton } from "antd";

export default function RecentLostItems({ itemCount = 2 }: {
    itemCount: number
}) {
    const { data, isLoading, isSuccess, isError } = useGetAllItemsQuery("lost")
    const { categoryId, searchKeyword } = useAppSelector((state: RootState) => state.item)

    let content;

    if (isLoading) {
        content = content = (
            <>
                {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} className="col-span-4 my-2 p-4" />
                ))}
            </>
        );
    } else if (isSuccess && data && data?.data?.length > 0) {
        const filterItem = data?.data.filter((item: IItem) => item.categoryId.includes(categoryId))
            .filter((item: IItem) => (item?.description?.includes(searchKeyword) || (item?.name?.includes(searchKeyword)) || (item?.location?.includes(searchKeyword))))

        if (filterItem?.length > 0) {
            content = filterItem?.slice(0, itemCount).map((item: IItem) => <ItemCard key={item.id} item={item} type="lost" />)

        } else {
            content = <p className="col-span-12 mb-5">No item found.</p>
        }

    } else if (isSuccess && data && data?.data?.length === 0) {
        content = <p className="col-span-12 mb-5">No item found.</p>
    } else if (isError) {
        content = <p className="col-span-12 mb-5">Failed to fetch data.</p>
    } else {
        content = <p className="col-span-12 mb-5">Something was wrong.</p>
    }

    return (
        <div className='grid grid-cols-12 gap-6 mt-6'>
            {content}
        </div>
    )
}
