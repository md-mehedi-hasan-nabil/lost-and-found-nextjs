import ChangePasswordForm from '@/components/form/ChangePasswordForm'
import { Button, Input } from 'antd'

export default function ChangePasswordPage() {
    return (
        <section>
            <h3 className='mb-6 text-3xl font-semibold'>Change your password</h3>

            <ChangePasswordForm />
        </section>
    )
}
