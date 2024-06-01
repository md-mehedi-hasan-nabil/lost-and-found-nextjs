import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Control, Controller } from "react-hook-form";

interface ReactHookInputProps {
    name: string;
    placeholder: string;
    size?: SizeType;
    control: Control<any>;
}

export default function ReactHookInput({ name, placeholder, size = "large", control }: ReactHookInputProps) {
    return (
        <Form.Item>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <Input {...field} size={size} placeholder={placeholder} />}
            />
        </Form.Item>
    );
}
