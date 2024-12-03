import Box from "@mui/material/Box";
import { FormikField } from "../../Components/FormikField";

export function OnboardingStep3() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormikField name="cardNumber" label="Card Number" required />
      <FormikField name="expiryDate" label="Expiry Date" required />
      <FormikField name="cvv" label="CVV" required />
    </Box>
  );
}
