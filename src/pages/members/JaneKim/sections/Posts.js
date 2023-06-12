import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TransparentBlogCard from "layouts/sections/TransparentBlogCard";
import BackgroundBlogCard from "layouts/sections/BackgroundBlogCard";
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
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/janekim/books.jpg"
              title="Books"
              description="2020년부터 본격적으로 집필을 시작하였습니다. 인류 역사와 고전, 인문학에 기반하여 미래에 대한 궁금증과 고민을 해결하고 사람들의 마음에 밝은 빛을 밝히는 책을 써나가고 있습니다."
              action={{
                type: "external",
                route:
                  "https://search.kyobobook.co.kr/search?keyword=%EC%A0%9C%EC%9D%B8%20%EC%BB%B4%ED%8D%BC%EB%8B%88%20%EA%B9%80%EC%97%B0%EC%A0%95",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/janekim/youtube.jpg"
              title="YouTube"
              description="인공지능과 새로운 시대를 화두로 다양한 분야의 국내외 전문가분들을 연결하는 콘텐츠를 만들고 있습니다."
              action={{
                type: "external",
                route:
                  "https://www.youtube.com/channel/UCtLhFTvYvj5nVuO1AkC_iVw?sub_confirmation=1",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/janekim/lecture.png"
              title="Online Course"
              description="새로운 시대의 행복한 자기계발을 주제로 강의를 만들고 있습니다. 인공지능과 영어, 인문학을 연결하는 강의를 구상 중입니다."
              action={{
                type: "external",
                route: "https://www.classu.co.kr/new/search?keyword=%EA%B9%80%EC%97%B0%EC%A0%95",
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
