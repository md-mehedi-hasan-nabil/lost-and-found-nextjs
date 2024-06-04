import { Spin } from 'antd'

export default function Loader() {
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <Spin size="large" />
        </div>
    )
}
