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
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/features/2023_fastcampus.png"
              title="평생 무료로 써먹는 나만의 ChatGPT 영어 선생님"
              description="패스트캠퍼스와 함께한 챗GPT 영어공부 방법 온라인 강의입니다. 누구나 나의 수준에 맞춰서, 살아있는 영어를 무료로 공부할 수 있습니다."
              action={{
                type: "external",
                route: "https://fastcampus.co.kr/data_online_chatgpte",
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
