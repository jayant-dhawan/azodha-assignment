import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "../../Components/Card";
import { Container } from "../../Components/Container";
import { useFormik } from "formik";
import { login } from "../../store/user";
import { useDispatch } from "react-redux";

export function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      login({
        email: formik.values.email,
      }),
    );
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
  });
  return (
    <Container fixed>
      <Box component={"form"} onSubmit={formik.handleSubmit}>
        <Card
          title="Login"
          sx={{ padding: "8px", minWidth: "300px" }}
          cardAction={
            <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          }
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              required
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
