import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Control, Controller } from "react-hook-form";

interface ReactHookInputProps {
    name: string;
    placeholder: string;
    size?: SizeType;
    control: Control<any>;
    type?: string;
}

export default function ReactHookInput({ name, placeholder, size = "large", control, type = "text" }: ReactHookInputProps) {
    return (
        <Form.Item>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <Input type={type} {...field} size={size} placeholder={placeholder} />}
            />
        </Form.Item>
    );
}
