import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/people/mok.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Hyeonmok Hwang</MKTypography>
              </MKBox>
              <MKTypography variant="body1" color="info">
                학습방법 연구위원
              </MKTypography>
              <br />
              <MKTypography variant="body2" fontWeight="light" color="text">
                균형감각에서 인공지능과 접목하기 용이한 학습방법을 연구하고 사례를 개발하는 역할을
                담당하고 있습니다.
                <br />
                현재 영양여자고등학교에서 영어교사로 재직하고 있습니다.
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
