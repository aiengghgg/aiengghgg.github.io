import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/examples/blog2.jpg";

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you soon.
                    </MKTypography>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        info@aieng.kr
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox
                  component="form"
                  p={2}
                  method="post"
                  action="https://formspree.io/f/xaylgyzq"
                >
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Contact Us
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      협업 문의
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                        variant="standard"
                        label="Subject"
                        placeholder="What I'm looking for..."
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        name="_subject"
                        id="email-subject"
                        type="text"
                        required
                        data-validation-required-message="Please submit the subject."
                      />
                    </Grid>
                    <Grid container>
                      <Grid item xs={6} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Name"
                          placeholder="My name is..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="name"
                          type="text"
                          id="full-name"
                          required
                          data-validation-required-message="Please enter your name"
                        />
                      </Grid>
                      <Grid item xs={6} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Phone Number"
                          placeholder="010-1234-5678"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="telephone"
                          type="telephone"
                          id="telephone"
                          required
                          data-validation-required-message="Please enter your phone number"
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="E-mail"
                          placeholder="email@aieng.kr"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          name="_replyto"
                          type="email"
                          id="email-address"
                          required
                          data-validation-required-message="Please enter your email adress"
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          name="complaint"
                          type="text"
                          id="complaint"
                          required
                          data-validation-required-message="Please enter a message."
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton type="submit" variant="gradient" color="info">
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
