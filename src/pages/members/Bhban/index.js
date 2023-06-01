import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import Navbar from "layouts/Navbar";
import Profile from "pages/members/Bhban/sections/Profile";
import Posts from "pages/members/Bhban/sections/Posts";
import Contact from "pages/members/Bhban/sections/Contact";
import Footer from "layouts/Footer";
import footerRoutes from "footer.routes";
import routes from "routes";
import bgImage from "assets/images/city-profile.jpg";

function Bhban() {
  return (
    <>
      <Navbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Bhban;
