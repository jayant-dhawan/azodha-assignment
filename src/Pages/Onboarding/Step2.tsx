import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useField } from "formik";
import { useState } from "react";
import { FormikField } from "../../Components/FormikField";

export function OnboardingStep2() {
  const [field] = useField("favoriteSongs");
  const [fields, setFields] = useState<null[]>(
    new Array(field.value.length).fill(null),
  );
  const handleAdd = () => {
    setFields([...fields, null]);
  };
  const handleRemove = () => {
    if (fields.length > 1) setFields(fields.slice(0, fields.length - 1));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {fields.map((_: null, index: number) => (
        <FormikField
          key={`favoriteSongs[${index}]`}
          name={`favoriteSongs[${index}]`}
          label="Favorite Song"
          required
        />
      ))}
      <Box display={"flex"} justifyContent={"flex-end"} gap={2}>
        <IconButton onClick={handleRemove}>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
