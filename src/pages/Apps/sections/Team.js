import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import team1 from "assets/images/people/bhban.jpg";
import team2 from "assets/images/people/mok.jpg";
import team3 from "assets/images/people/jejong.jpg";
import team4 from "assets/images/people/jkim.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Commitiee Members
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Get to know the dedicated individuals who shape our community.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="반병현"
                position={{ color: "info", label: "공학자" }}
                description={"인공지능 연구위원"}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="황현목"
                position={{ color: "info", label: "교사" }}
                description="학습방법 연구위원"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="이제종"
                position={{ color: "info", label: "강사" }}
                description="교재 연구위원"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="김지애"
                position={{ color: "info", label: "교사" }}
                description="학습방법 연구위원"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
