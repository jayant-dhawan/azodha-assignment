import { Navigate, Routes, Route, useLocation } from "react-router";
import { Layout } from "./Pages/Layout";
import { Login } from "./Pages/Login";
import { useSelector } from "react-redux";
import { Store } from "./store";
import { Onboarding } from "./Pages/Onboarding";
import { OnboardingStep1 } from "./Pages/Onboarding/Step1";
import { OnboardingStep2 } from "./Pages/Onboarding/Step2";
import { OnboardingStep3 } from "./Pages/Onboarding/Step3";
import { OnboardingStep4 } from "./Pages/Onboarding/Step4";
import { Dashboard } from "./Pages/Dashboard";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector((state: Store) => state.user.isLoggedIn);
  const isOnboardingDone = useSelector(
    (state: Store) => state.user.profile.isOnboardingDone,
  );

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (isLoggedIn && !isOnboardingDone && !pathname.startsWith("/onboarding")) {
    return <Navigate to="/onboarding" />;
  }
  return children;
};

const UnprotectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useSelector((state: Store) => state.user.isLoggedIn);
  const isOnboardingDone = useSelector(
    (state: Store) => state.user.profile.isOnboardingDone,
  );

  if (isLoggedIn && !isOnboardingDone) {
    return <Navigate to="/onboarding" />;
  }
  if (isLoggedIn && isOnboardingDone) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export function Router() {
  const step = useSelector((state: Store) => state.user.profile.onboardingStep);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <UnprotectedRoute>
              <Login />
            </UnprotectedRoute>
          }
        />
        <Route
          path="onboarding"
          element={<Navigate to={`/onboarding/${step}`} />}
        />
        <Route
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        >
          <Route path="onboarding/1" element={<OnboardingStep1 />} />
          <Route path="onboarding/2" element={<OnboardingStep2 />} />
          <Route path="onboarding/3" element={<OnboardingStep3 />} />
          <Route path="onboarding/4" element={<OnboardingStep4 />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
