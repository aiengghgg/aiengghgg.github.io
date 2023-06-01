import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my recent works
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/portfolios/jlee/fastcampus.jpg"
              title="Online Lecture"
              description="챗GPT와 함께 정복하는 실전 영어! <평생 무료로 써먹는 나의 ChatGPT 영어 선생님> 강의를 제작했습니다."
              action={{
                type: "external",
                route: "https://fastcampus.co.kr/data_online_chatgpte",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/portfolios/jlee/books.jpg"
              title="Books"
              description="(머라고적죠)."
              action={{
                type: "external",
                route: "https://search.shopping.naver.com/book/catalog/37153902621",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/portfolios/jlee/researchgate.jpg"
              title="Researchgate"
              description="소소하게 하나씩 모은 10여편의 논문과 30여편의 특허를 살펴보세요!"
              action={{
                type: "external",
                route: "https://www.researchgate.net/profile/Byunghyun-Ban",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Official Website"
              description="개발, 강연, 사회공헌, 미술품 수집 등 더 다양한 정보를 한 눈에 살펴보려면?"
              action={{
                type: "external",
                route: "https://needleworm.github.io",
                label: "Go!",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
