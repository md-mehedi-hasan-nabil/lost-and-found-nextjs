import { IItem } from "@/types";
import { Badge, Button } from "antd";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
    item: IItem,
    type: "lost" | "found"
}

export default function ItemCard({ item, type }: ItemCardProps) {
    const content = <div className="w-full grid grid-cols-12 gap-4 bg-white border border-gray-200 rounded-lg shadow ">
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
            <p className="mt-1"><b className="capitalize">{type} Date:</b> {moment(item.date, "YYYYMMDD").fromNow()}</p>

            <div className="mt-4">
                <Link href={`/recent-lost-item/${item.id}`} >
                    <Button type="primary">See more {type} item</Button>
                </Link>
            </div>
        </div>
    </div>

    return (
        <div key={item.id} className="col-span-12 md:col-span-6">
            {
                type == "found" ? <Badge.Ribbon text={item?.status}
                    color={item.status == "APPROVED" ? "blue" : "volcano"}>
                    {content}
                </Badge.Ribbon> : <>{content}</>
            }
        </div>
    )
}
