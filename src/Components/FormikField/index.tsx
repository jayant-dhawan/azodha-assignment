import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Field, FieldProps } from "formik";

type FormikFieldProps = {
  name: string;
  label: string;
  type?: TextFieldProps["type"];
  required?: boolean;
};

export function FormikField({ name, label, type, required }: FormikFieldProps) {
  return (
    <Field
      name={name}
      children={({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          type={type}
          error={!!meta.error}
          helperText={meta.error}
          required={required}
        />
      )}
    ></Field>
  );
}
