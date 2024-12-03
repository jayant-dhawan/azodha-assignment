import { Outlet, useLocation, useNavigate } from "react-router";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import { Container } from "../../Components/Container";
import { Card } from "../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { setOnboarding } from "../../store/user";
import { schemaStep1, schemaStep2, schemaStep3 } from "../../schema/onboarding";

export function Onboarding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const step = Number(pathname.split("/")[2]);
  const profile = useSelector((state: Store) => state.user.profile);

  const handleNext = () => {
    navigate(`/onboarding/${step + 1}`);
  };
  const handleBack = () => {
    if (step > 1) {
      dispatch(setOnboarding({ onboardingStep: step - 1 }));
      navigate(`/onboarding/${step - 1}`);
    }
  };

  return (
    <Container fixed>
      <Card
        sx={{ padding: "8px", minWidth: "300px" }}
        title={"Onboarding - Step " + step}
      >
        <Formik
          initialValues={{
            name: profile.name,
            age: profile.age,
            email: profile.email,
            profileImage: profile.profileImage,
            favoriteSongs: profile.favoriteSongs,
            cardNumber: profile.cardNumber,
            expiry: profile.expiry,
            cvv: profile.cvv,
          }}
          onSubmit={async (values, actions) => {
            try {
              if (step === 1) {
                schemaStep1.validateSync(values);
              } else if (step === 2) {
                schemaStep2.validateSync(values);
              } else if (step === 3) {
                schemaStep3.validateSync(values);
              }
              dispatch(
                setOnboarding({
                  onboardingStep: step + 1,
                  ...values,
                  isOnboardingDone: step + 1 === 4,
                }),
              );
              handleNext();
            } catch (error: Yup.ValidationError | unknown) {
              if (error instanceof Yup.ValidationError) {
                actions.setFieldError(error.path!, error.message);
              }
            }
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Outlet context={props} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "8px",
                  gap: 2,
                }}
              >
                {step < 4 && (
                  <>
                    <Button
                      disabled={step === 1}
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Go Back
                    </Button>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </>
                )}
                {step === 4 && (
                  <Button
                    onClick={() => navigate("/dashboard")}
                    variant="contained"
                  >
                    Go to Dashboard
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}
