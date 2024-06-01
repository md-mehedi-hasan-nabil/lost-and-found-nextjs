"use client"

import { Form, Input, Button } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactHookInput from "@/components/form/ReactHookInput";
import SelectCategoryInput from "@/components/SelectCategoryInput";
import CloudinaryWidget from "@/components/cloudinary/CloudinaryWidget";
import TextArea from "antd/es/input/TextArea";
import { TimePicker, DatePicker } from "antd";
import dayjs from 'dayjs'; // Import dayjs for date manipulation
import { ReportItemInputs, TItemType } from "@/types";
import ReactHookTimePicker from "@/components/form/ReactHookTimePicker";
import ReactHookDatePicker from "@/components/form/ReactHookDatePicker";

interface ReportItemProps {
    params: { type: "lost" | "found" };
}

export default function ReportItem({ params }: ReportItemProps) {
    console.log(params?.type)
    const { control, handleSubmit } = useForm<ReportItemInputs>({
        defaultValues: {
            itemType: params?.type?.toLocaleUpperCase() as TItemType
        }
    });

    const onSubmit: SubmitHandler<ReportItemInputs> = async (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="pb-14">
            <div className="container mt-10">
                <h2 className="capitalize text-3xl font-bold">Submit {params.type} Property</h2>
                <div className="mt-8">
                    <CloudinaryWidget />
                </div>
                <Form onFinish={handleSubmit(onSubmit)} className="mt-5">
                    <div className="grid grid-cols-12 gap-6 mt-4">
                        <div className="col-span-6 -mb-8">
                            <ReactHookInput control={control} name="name" placeholder="What was Lost" />
                        </div>
                        <div className="col-span-6">
                            <ReactHookTimePicker name="time" control={control} placeholder="Time Lost" />
                        </div>
                        <div className="col-span-6">
                            <ReactHookDatePicker name="date" control={control} placeholder="Date Lost" />
                        </div>
                        <div className="col-span-6">
                            <SelectCategoryInput control={control} />
                        </div>
                        <div className="col-span-12">
                            <Form.Item>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) =>
                                        <TextArea {...field} size="large" placeholder="Location"
                                            autoSize={{ minRows: 3, maxRows: 5 }} />}
                                />
                            </Form.Item>
                        </div>
                        <h2 className="col-span-12 capitalize text-3xl font-bold mt-4">Contact Information</h2>
                        <div className="col-span-6">
                            <ReactHookInput control={control} name="contact.email" placeholder="Enter email" />
                        </div>
                        <div className="col-span-6">
                            <ReactHookInput control={control} name="contact.phone" placeholder="Enter phone" />
                        </div>
                    </div>
                    <Button htmlType="submit" type="primary" size="large" className="mt-5">Submit</Button>
                </Form>
            </div>
        </section>
    );
}
