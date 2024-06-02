import { DatePicker } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";

interface ReactHookDatePickerProps {
    name: string;
    placeholder: string;
    size?: SizeType;
    control: Control<any>;
}

export default function ReactHookDatePicker({ name, control, placeholder = "", size = "large" }: ReactHookDatePickerProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                    {...field}
                    size={size}
                    format="MM/DD/YYYY"
                    onChange={(date) => {
                        const formattedDate = date ? date.format("MM/DD/YYYY") : null;
                        field.onChange(formattedDate);
                    }}
                    placeholder={placeholder}
                    className="w-full"
                    value={field.value ? dayjs(field.value, "MM/DD/YYYY") : null}
                />
            )}
        />
    );
}
