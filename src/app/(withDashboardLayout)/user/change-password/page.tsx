import { Button, Input } from 'antd'

export default function ChangePasswordPage() {
    return (
        <section>
            <h3 className='mb-6 text-3xl font-semibold'>Change your password</h3>

            <form>
                <div className='mb-6'>
                    <Input size='large' placeholder='Old Password' name="old_password" />
                </div>
                <div className='mb-6'>
                    <Input size='large' placeholder='New Password' name="password" />
                </div>

                <div>
                    <Button size='large' type='primary' htmlType='submit'>Change Password</Button>
                </div>
            </form>
        </section>
    )
}
