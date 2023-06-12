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
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/features/papers2.jpg"
              title="수능 영어시험의 어휘 등장 패턴 분석"
              description="반병현, 이제종, 황현목 (2022)"
              action={{
                type: "external",
                route: "https://www.earticle.net/Article/A425485",
                color: "info",
                label: "AIED",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} alignItems="center">
            <CenteredBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/features/papers1.jpg"
              title="Analysis on English Vocabulary Appearance Pattern in Korean CSAT"
              description="B.Ban, J.Lee, H.Hwang (2022)"
              action={{
                type: "external",
                route: "https://arxiv.org/abs/2211.15426",
                color: "info",
                label: "ArXiv",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
