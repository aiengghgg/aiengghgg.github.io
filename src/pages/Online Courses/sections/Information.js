import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import CenteredBlogCard from "layouts/sections/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} alignItems="center">
            <CenteredBlogCard
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/features/2023_fastcampus.png"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
