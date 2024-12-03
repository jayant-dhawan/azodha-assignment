import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Card";
import { Container } from "../../Components/Container";
import { Store } from "../../store";

export function Dashboard() {
  const profile = useSelector((state: Store) => state.user.profile);
  return (
    <Container fixed sx={{ flexDirection: "column", gap: 2 }}>
      <Card title="Dashboard" sx={{ padding: "8px", minWidth: "80%" }}>
        <Box display={"grid"} gridTemplateColumns={"1fr auto"}>
          <Box>
            <Typography variant="h6">Welcome {profile.name}</Typography>
            <Typography variant="body1">Age: {profile.age}</Typography>
            <Typography variant="body1">Email: {profile.email}</Typography>
            <Typography variant="body1">
              Favorite Songs: {profile.favoriteSongs.join(", ")}
            </Typography>
          </Box>
          <Box>
            {profile.profileImage && (
              <img src={profile.profileImage} alt="Profile" width={150} />
            )}
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
