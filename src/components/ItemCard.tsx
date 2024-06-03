import { IItem } from "@/types";
import { Button } from "antd";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
    item: IItem
}

export default function ItemCard({ item }: ItemCardProps) {
    return (
        <div key={item.id} className="col-span-12 md:col-span-6">
            <div className="w-full grid grid-cols-12 gap-4 bg-white border border-gray-200 rounded-lg shadow ">
                {item?.image_url && <div className="col-span-4">
                    <Image
                        width={200}
                        height={200}
                        className="rounded-lg w-full p-3"
                        src={item.image_url}
                        alt="product image"
                    />
                </div>}
                <div className="col-span-8 py-3">
                    <h5 className="text-2xl font-bold capitalize text-gray-900">
                        {item.name}
                    </h5>
                    <p className="text-lg line-clamp-1 mt-2">{item.description}</p>
                    <p className="text-base line-clamp-1 mt-2"><b>Location: </b><i>{item.location}</i></p>
                    <p className="mt-1"><b>Lost Date:</b> {moment(item.date).startOf('hour').fromNow()}</p>

                    <div className="mt-4">
                        <Link href={`/recent-lost-item/${item.id}`} >
                            <Button type="primary">See more lost item</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
