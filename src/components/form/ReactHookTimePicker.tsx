import { TimePicker } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";

interface ReactHookTimePickerProps {
    name: string;
    placeholder: string;
    size?: SizeType;
    control: Control<any>;
}

export default function ReactHookTimePicker({ name, control, placeholder = "" }: ReactHookTimePickerProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TimePicker
                    {...field}
                    size="large"
                    use12Hours
                    format="h:mm a"
                    onChange={(time) => {
                        const formattedTime = time.format("h:mm a").toUpperCase();
                        console.log(time, formattedTime);
                        field.onChange(formattedTime);
                    }}
                    placeholder={placeholder}
                    className="w-full"
                    value={field.value ? dayjs(field.value, "h:mm a") : null}
                />
            )}
        />
    );
}
