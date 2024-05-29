import { IRegister } from "@/types";
import { Form, Input } from "antd";
import { useFormContext, Controller, FieldErrors, RegisterOptions } from "react-hook-form";

interface FormItemProps {
  name: string;
  rules: RegisterOptions;
  errors: FieldErrors<IRegister>;
  placeholder: string;
  prefix?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'number';
  component?: React.ElementType;
}

export default function FormItem({ name, rules, errors, placeholder, prefix, type = 'text', component: Component = Input }: FormItemProps) {
  const { control } = useFormContext();

  return (
    <Form.Item>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Component
            {...field}
            type={type}
            size="large"
            placeholder={placeholder}
            prefix={prefix}
          />
        )}
      />
    </Form.Item>
  )
}




