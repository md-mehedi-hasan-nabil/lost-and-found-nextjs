"use client"

import { Form, Button, message } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactHookInput from "@/components/form/ReactHookInput";
import SelectCategoryInput from "@/components/SelectCategoryInput";
import CloudinaryWidget from "@/components/cloudinary/CloudinaryWidget";
import TextArea from "antd/es/input/TextArea";
import { ReportItemInputs, TItemType } from "@/types";
import ReactHookTimePicker from "@/components/form/ReactHookTimePicker";
import ReactHookDatePicker from "@/components/form/ReactHookDatePicker";
import { useEffect, useState } from "react";
import { useCreateItemMutation } from "@/redux/features/item/itemApi";

interface ReportItemProps {
    params: { type: "lost" | "found" };
}

export default function ReportItem({ params }: ReportItemProps) {
    const [createItem, { isSuccess, isLoading }] = useCreateItemMutation()
    const [image_url, setImage_url] = useState<string>("")

    const { control, handleSubmit, reset } = useForm<ReportItemInputs>({
        defaultValues: {
            itemType: params?.type?.toLocaleUpperCase() as TItemType
        }
    });

    useEffect(() => {
        if (isSuccess) {
            message.success(`Your ${params.type} item submit successfull.`)
            reset()
            setImage_url("")
        }
    }, [isSuccess, reset, params])

    const onSubmit: SubmitHandler<ReportItemInputs> = async (data) => {
        try {
            createItem({
                ...data,
                image_url
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="pb-14">
            <div className="container mt-10">
                <h2 className="capitalize text-3xl font-bold">Submit {params.type} Property</h2>
                <div className="mt-8">
                    <CloudinaryWidget onChange={setImage_url} />
                </div>
                <Form onFinish={handleSubmit(onSubmit)} className="mt-5">
                    <div className="grid grid-cols-12 gap-6 mt-4">
                        <div className="col-span-6 -mb-8">
                            <ReactHookInput control={control} name="name" placeholder={`What was ${params?.type}`} />
                        </div>
                        <div className="col-span-6">
                            <SelectCategoryInput control={control} />
                        </div>
                        <div className="col-span-6">
                            <ReactHookDatePicker name="date" control={control} placeholder={`Date ${params?.type}`} />
                        </div>
                        <div className="col-span-6">
                            <ReactHookTimePicker name="time" control={control} placeholder={`Time ${params?.type}`} />
                        </div>
                        <div className="col-span-6">
                            <Form.Item>
                                <Controller
                                    name="location"
                                    control={control}
                                    render={({ field }) =>
                                        <TextArea {...field} size="large" placeholder="Location"
                                            autoSize={{ minRows: 3, maxRows: 5 }} />}
                                />
                            </Form.Item>
                        </div>
                        <div className="col-span-6">
                            <Form.Item>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) =>
                                        <TextArea {...field} size="large" placeholder={`Enter ${params?.type} item description`}
                                            autoSize={{ minRows: 3, maxRows: 5 }} />}
                                />
                            </Form.Item>
                        </div>
                        <h2 className="col-span-12 capitalize text-3xl font-bold mt-4">Contact Information</h2>
                        <div className="col-span-6">
                            <ReactHookInput control={control} name="contact.email" type="email" placeholder="Enter email" />
                        </div>
                        <div className="col-span-6">
                            <ReactHookInput control={control} name="contact.phone" placeholder="Enter phone" />
                        </div>
                    </div>
                    <Button loading={isLoading} htmlType="submit" type="primary" size="large" className="mt-5">Submit</Button>
                </Form>
            </div>
        </section>
    );
}
