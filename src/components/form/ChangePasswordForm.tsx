"use client"

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input, Button, Form, message } from 'antd';
import { IoKeyOutline } from 'react-icons/io5';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/services/actions/logoutUser';

type Inputs = {
    new_password: string;
    old_password: string;
}

export default function ChangePasswordForm() {
    const router = useRouter()
    const [changePassword, { isLoading, isSuccess, isError, error }] = useChangePasswordMutation()
    const { control, handleSubmit } = useForm<Inputs>();

    useEffect(() => {
        if (isSuccess) {
            message.success("Password changed successful.")
            logoutUser(router)
        }
    }, [isSuccess, router])

    useEffect(() => {
        if (isError) {
            message.success("Password changed failed.")
        }
    }, [isError])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        changePassword(data)
    };

    return (
        <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item name="password">
                <Controller
                    name="old_password"
                    control={control}
                    rules={{ required: true, minLength: 6 }}
                    render={({ field, fieldState: { error } }) =>
                        <>
                            <Input {...field} required type="password" size="large" placeholder="Old Password" prefix={<IoKeyOutline />} />
                            {error && <span className='text-red-400 text-sm'>Password must be at least 6 characters long</span>}
                        </>
                    }
                />
            </Form.Item>

            <Form.Item name="password">
                <Controller
                    name="new_password"
                    control={control}
                    rules={{ required: true, minLength: 6 }}
                    render={({ field, fieldState: { error } }) =>
                        <>
                            <Input {...field} required type="password" size="large" placeholder="New Password" prefix={<IoKeyOutline />} />
                            {error && <span className='text-red-400 text-sm'>Password must be at least 6 characters long</span>}
                        </>
                    }
                />
            </Form.Item>

            <div>
                <Button disabled={isLoading} loading={isLoading} size='large' type='primary' htmlType='submit'>
                    Change Password
                </Button>
            </div>
        </Form>
    );
};


