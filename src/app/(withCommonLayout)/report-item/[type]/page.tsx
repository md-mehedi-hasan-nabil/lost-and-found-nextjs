"use client"

import { Button, DatePicker, Input, MenuProps, Select, TimePicker, TimePickerProps } from "antd"

export default function ReportItem({ params }: { params: { type: string } }) {
    console.log(params)

    const onChange: TimePickerProps['onChange'] = (time, timeString) => {
        console.log(time, timeString);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <section>
            <div className="container mt-10">
                <h2 className="capitalize text-4xl font-bold">Submit {params.type} Property</h2>

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
                            <Select
                                className="w-full"
                                size="large"
                                defaultValue="lucy"
                                onChange={handleChange}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled' },
                                ]}
                            />
                        </div>
                    </div>

                    <Button type="primary" size="large" className="mt-5">Submit</Button>
                </form>
            </div>
        </section>
    )
}
