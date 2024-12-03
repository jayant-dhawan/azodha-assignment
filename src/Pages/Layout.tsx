import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../store";
import { logout } from "../store/user";

export function Layout() {
  const isLoggedIn = useSelector((state: Store) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: "64px",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box display={"flex"}>
          <Typography variant="h6" component="div">
            Azodha Assignment
          </Typography>
        </Box>
        {isLoggedIn && (
          <Box display={"flex"}>
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          </Box>
        )}
      </AppBar>
      <Container sx={{ height: "calc(100vh - 64px)" }}>
        <Outlet />
      </Container>
    </Box>
  );
}
