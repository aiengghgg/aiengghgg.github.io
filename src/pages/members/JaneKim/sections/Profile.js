import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/people/janekim.jpg";

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
                <MKTypography variant="h3">Yeonjung Kim</MKTypography>
              </MKBox>
              <MKTypography variant="body1" color="info">
                프롬프트 엔지니어
              </MKTypography>
              <br />
              <MKTypography variant="body2" fontWeight="light" color="text">
                균형감각의 국/영문 프롬프트 엔지니어링 연구를 담당하고 있습니다. 고전, 문학, 창업,
                미래학, 일상 등 다양한 분야에 걸쳐 10여 권의 저서를 자가 출판하였으며, 주요 저서로는
                &lt;번역의 미래&gt;, &lt;The Future of Translation&gt;이 있습니다. 예술/철학/인문
                분야에 중심을 두고 인공 지능의 시대에 인류가 나아갈 방향과 인간/기계의 조화로운
                공생을 고민하고 있습니다.
                <br />
                현재 프리랜서 번역가로 일하면서 챗GPT, 균형감각 팀과 함께 다양한 저서를 집필
                중입니다.
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
