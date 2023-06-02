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
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/features/app1.JPG"
              title="AI Voca"
              description="균형감각이 개발한 다양한 AI기반 영어 공부 방법을 쉽고 간편하게 체험할 수 있는 교육용 앱"
              action={{
                type: "external",
                route: "https://play.google.com/store/apps/details?id=com.webview.ai_voca&hl=ko",
                color: "info",
                label: "Android",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
