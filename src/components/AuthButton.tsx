import { authKey } from '@/contants/authKey';
import { getUserFromCookies } from '@/services/actions/getUserFromCookies';
import { AuthUser } from '@/types';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { logoutUser } from '@/services/actions/logoutUser';

export default function AuthButton() {
    const router = useRouter()
    const [authUserInfo, setAuthUserInfo] = useState<AuthUser | null>()

    useEffect(() => {
        getUserFromCookies(authKey).then(data => {
            setAuthUserInfo(data)
        })
    }, [])

    function handleLogout() {
        logoutUser(router)
    }

    return (
        <div className='flex items-center gap-2'>
            {
                authUserInfo ?
                    <Dropdown menu={{
                        items: [
                            {
                                key: '1',
                                label: (
                                    <Link href={`${authUserInfo.role === "ADMIN" ? "/admin" : "/user"}`}>
                                        Dashboard
                                    </Link>
                                ),
                            },
                            {
                                key: '2',
                                label: (
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                ),
                            }
                        ]
                    }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown> :
                    <>
                        <Link href="/login">
                            <Button type='primary'>Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Register</Button>
                        </Link>
                    </>
            }
        </div>
    )
}
