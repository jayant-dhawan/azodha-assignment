import Box from "@mui/material/Box";
import { Field, FieldProps } from "formik";
import { FormikFileInput } from "../../Components/FormikFileInput";
import { FormikField } from "../../Components/FormikField";

export function OnboardingStep1() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormikField name="name" label="Name" required />
      <FormikField name="age" label="Age" required />
      <FormikField name="email" label="Email" type="email" required />
      <Field
        name="profileImage"
        children={(props: FieldProps) => (
          <FormikFileInput {...props} label="Profile Image" required />
        )}
      ></Field>
    </Box>
  );
}
