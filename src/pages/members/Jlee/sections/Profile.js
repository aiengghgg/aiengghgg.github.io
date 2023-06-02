import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/people/jejong.jpg";

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
                <MKTypography variant="h3">Jejong Lee</MKTypography>
              </MKBox>
              <MKTypography variant="body1" color="info">
                교재 연구위원
              </MKTypography>
              <br />
              <MKTypography variant="body2" fontWeight="light" color="text">
                균형감각의 여어 교재 연구를 담당하고 있습니다. 챗GPT를 활용한 영어 교육 관련 프롬프트 분야에 깊은 전문성이 있습니다.
                <br />
                현재 대구 수성구 유명 학원의 영어강사로 재직하고 있으며, FastCampus 등 국내 대형 인터넷 강의 업체와 협업하여 강의를 촬영하고
                있습니다.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
