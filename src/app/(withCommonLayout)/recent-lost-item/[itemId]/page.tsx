"use client"

import ReactHookDatePicker from "@/components/form/ReactHookDatePicker"
import { useCreateClaimsMutation } from "@/redux/features/claim/claim.Api"
import { useGetItemQuery } from "@/redux/features/item/itemApi"
import { IItem } from "@/types"
import { Badge, Button, DatePicker, Form, Input, message, Modal, Skeleton } from "antd"
import TextArea from "antd/es/input/TextArea"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
    distinguishingFeatures: string;
    lostDate: string;
}

export default function LostItemDetails({ params }: { params: { itemId: string } }) {
    const [createClaim, { isSuccess: isSuccessCreateClaim, isLoading: isLoadingCreateClaim, isError: isErrorCreateClaim }] = useCreateClaimsMutation()
    
    const { data: item, isLoading: isLoadingFetchItem, isSuccess: isSuccessFetchItem, isError: isErrorFetchItem } = useGetItemQuery({
        itemId: params.itemId,
        type: "lost"
    })

    const { control, handleSubmit, reset } = useForm<Inputs>();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isSuccessCreateClaim) {
            message.success("Claim resuest send successful.")
            reset()
            setIsModalOpen(false);
        }
    }, [isSuccessCreateClaim, reset])

    useEffect(() => {
        if (isErrorCreateClaim) {
            message.error("Claim resuest send failed.")
        }
    }, [isErrorCreateClaim])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            createClaim({
                ...data,
                itemId: params.itemId,
                lostDate: new Date(data.lostDate)
            })

        } catch (error) {
            console.log(error)
        }
    };

    let content;

    if (isLoadingFetchItem) {
        content = <div className="col-span-12 py-5 h-[70vh]"><Skeleton /></div>
    } else if (isSuccessFetchItem && item?.data) {
        const { image_url, name, description, category: { name: categoryName }, location } = (item?.data as IItem) || {};

        content = <>
            {image_url && <div className="col-span-4">
                <Image width={500} height={500} src={image_url} className="rounded-lg" alt={name} />
            </div>}
            <div className="col-span-8 bg-slate-100 rounded-lg">
                <Badge.Ribbon text={categoryName}>
                    <div className="p-5">
                        <h2 className="text-4xl font-bold capitalize">{name}</h2>
                        <p className="text-lg font-medium capitalize text-stone-800 mt-4">{description}</p>
                        <p className="mt-5">
                            <b className="font-bold">Lost Location: </b> {location}
                        </p>
                        <Button onClick={showModal} size="middle" type="primary" className="mt-4">Request Claim</Button>
                    </div>
                </Badge.Ribbon>
            </div>
        </>
    } else if (isErrorFetchItem) {
        content = <p>Failed to fetch data</p>
    } else {
        content = <p>Something was wrong.</p>
    }

    return (
        <section className="container py-12 min-h-[80vh]">
            <div className="grid grid-cols-12 gap-6">
                {content}
            </div>

            <Modal title="Send Claim Request" open={isModalOpen} footer="" onCancel={handleCancel}>
                <Form onFinish={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <ReactHookDatePicker name="lostDate" control={control} placeholder="Lost Date" />
                        </div>
                        <div>
                            <Form.Item>
                                <Controller
                                    name="distinguishingFeatures"
                                    control={control}
                                    render={({ field }) =>
                                        <TextArea {...field} size="large" placeholder="LocalWrite Distinguishing Featurestion"
                                            autoSize={{ minRows: 3, maxRows: 5 }} />}
                                />
                            </Form.Item>
                        </div>

                        <div>
                            <Button htmlType="submit" type="primary" loading={isLoadingCreateClaim}>
                                Send Request
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </section >
    )
}
