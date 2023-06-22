import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "layouts/sections/DefaultInfoCard";
import CenteredBlogCard from "layouts/sections/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="balance"
                    title="Balance"
                    description="We pursue a balanced collabroation of diverse professional knowledge."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="science"
                    title="Research"
                    description="We seek, find, modify, and utilize AI technologies on English learning."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="edit_note"
                    title="Open Knwoledge"
                    description="We write books and papers to contribute our new findings to the world."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="money_off"
                    title="Non-Profit"
                    description="AI. Eng. is a non-profit academic organization."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/main/recent work.png"
              title="Get insights"
              description="Meet our recent work"
              action={{
                type: "external",
                route: "https://search.shopping.naver.com/book/catalog/40724311622",
                color: "info",
                label: "Recent Work",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
