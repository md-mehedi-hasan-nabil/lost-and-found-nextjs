"use client"

import CloudinaryWidget from "@/components/cloudinary/CloudinaryWidget";
import SelectCategoryInput from "@/components/SelectCategoryInput";
import { Button, DatePicker, Input, MenuProps, Select, TimePicker, TimePickerProps } from "antd"
import TextArea from "antd/es/input/TextArea";

export default function ReportItem({ params }: { params: { type: string } }) {
    console.log(params)

    const onChange: TimePickerProps['onChange'] = (time, timeString) => {
        console.log(time, timeString);
    };


    return (
        <section className="pb-14">
            <div className="container mt-10">
                <h2 className="capitalize text-3xl font-bold">Submit {params.type} Property</h2>
                <div className="mt-8">
                    <CloudinaryWidget />
                </div>
                <form className="mt-5">
                    <div className="grid grid-cols-12 gap-6 mt-4">
                        <div className="col-span-6">
                            <Input size="large" placeholder="What was Lost" className="w-full" />
                        </div>
                        <div className="col-span-6">
                            <TimePicker size="large" use12Hours format="h:mm a" onChange={onChange} placeholder="Time Lost" className="w-full" />
                        </div>
                        <div className="col-span-6">
                            <DatePicker size="large" placeholder="Date Lost" onChange={onChange} className="w-full" />
                        </div>
                        <div className="col-span-6">
                            <SelectCategoryInput />
                        </div>
                        <div className="col-span-12">
                            <TextArea
                                // value={value}
                                // onChange={(e) => setValue(e.target.value)}
                                placeholder="Location"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </div>
                        <h2 className="col-span-12 capitalize text-3xl font-bold">Contact Information</h2>
                        <div className="col-span-6">
                            <Input size="large" placeholder="Enter email" className="w-full" />
                        </div>
                        <div className="col-span-6">
                            <Input size="large" placeholder="Enter phone" className="w-full" />
                        </div>
                    </div>
                    <Button type="primary" size="large" className="mt-5">Submit</Button>
                </form>

            </div>
        </section>
    )
}
