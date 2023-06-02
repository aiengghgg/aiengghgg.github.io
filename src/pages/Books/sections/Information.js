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
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/features/aivoca.jpg"
              title="AI 족집게 수능영단어"
              description="역대 수능, 평가원 기출문제를 모두 AI에게 학습시켰더니, 시중 도서 대비 수능 출제 단어를 5배 높은 정확도로 예측할 수 있었습니다! 이 기술을 토대로 만든 단어장입니다."
              action={{
                type: "external",
                route: "https://search.shopping.naver.com/book/catalog/37153902621",
                color: "info",
                label: "Details",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
