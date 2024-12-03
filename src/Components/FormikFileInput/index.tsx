import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { FieldProps } from "formik";
import fileToBase64 from "../../utils/fileToBase64";

type FileInputProps = FieldProps & {
  label?: string;
  required?: boolean;
};
export function FormikFileInput({
  field,
  meta,
  form,
  label,
  required,
}: FileInputProps) {
  const clear = () => {
    form.setFieldValue(field.name, "");
  };

  return (
    <Box flexDirection={"column"}>
      <InputLabel>{label}</InputLabel>
      {!field.value && (
        <TextField
          {...field}
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            const base64 = await fileToBase64(e.target.files?.[0]);
            form.setFieldValue(field.name, base64);
          }}
          type="file"
          error={!!meta.error}
          helperText={meta.error}
          required={required}
        />
      )}
      {field.value && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={field.value} width={150} />
          <IconButton onClick={clear}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
