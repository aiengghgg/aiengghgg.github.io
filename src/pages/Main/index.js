import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";
import Information from "pages/Main/sections/Information";
import Team from "pages/Main/sections/Team";
import Featuring from "pages/Main/sections/Featuring";
import Contact from "pages/Main/sections/Contact";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";

function Main() {
  return (
    <>
      <Navbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              균형감각
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              <u>A</u>rtificial <u>I</u>ntelligence for <u>ENG</u>lish Learning
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Main;
