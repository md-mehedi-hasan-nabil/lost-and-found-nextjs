import { isLoggedIn, removeUser } from '@/services/auth.service';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function AuthButton() {
    const router = useRouter()

    function handleLogout() {
        removeUser()
        router.refresh()
    }

    const userItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link href="/profile">
                    Profile
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
    ];

    return (
        <div className='flex items-center gap-2'>
            {
                isLoggedIn() ? <Dropdown menu={{ items: userItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown> : <>
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
