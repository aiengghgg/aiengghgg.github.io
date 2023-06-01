import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/people/bhban.jpg";

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
                <MKTypography variant="h3">Byunghyun Ban</MKTypography>
              </MKBox>
              <MKTypography variant="body1" color="info">
                인공지능 연구위원
              </MKTypography>
              <br />
              <MKTypography variant="body2" fontWeight="light" color="text">
                균형감각의 인공지능 기술 연구를 담당하고 있습니다. 20여권의 저서를 출간한 작가이자,
                30여건의 특허를 출원한 발명가이며, 10여건의 논문을 집필한 공학자입니다. 역사와
                전통이 살아있는 분야에 첨단 기술을 끼얹어 파괴적 혁신을 추구하는 데에서 희열을
                느낍니다.
                <br />
                현재 상상텃밭(주)의 CTO로 재직하며 농업 분야의 첨단 기술을 연구하고 있습니다.
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
