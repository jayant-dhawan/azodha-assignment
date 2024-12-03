import * as Yup from "yup";

export const schemaStep1 = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .integer("Age must be an integer")
    .required("Age is required")
    .moreThan(0, "Age must be greater than 0"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  profileImage: Yup.string().required("Profile image is required"),
});

export const schemaStep2 = Yup.object().shape({
  favoriteSongs: Yup.array(
    Yup.string().required("Song is required"),
  ).required(),
});

export const schemaStep3 = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d+$/, "Card number must be numeric")
    .length(16, "Card number must be 16 digits"),
  expiry: Yup.string()
    .required("Expire date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Expire date must be in MM/YY format",
    ),
  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^\d+$/, "CVV must be numeric")
    .length(3, "CVV must be 3 digits"),
});
