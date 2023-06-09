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
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/bhban/books.jpg"
              title="Books"
              description="벌써 20권이 넘는 책이 출판이 완료되었네요. 그거 아세요? 출판사에서 편집 중인 원고가 5권 더 있다는 사실을."
              action={{
                type: "external",
                route: "https://search.kyobobook.co.kr/search?keyword=%EB%B0%98%EB%B3%91%ED%98%84",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/bhban/youtube.jpg"
              title="YouTube"
              description="유익한듯 해괴한 컨텐츠를 만들고 있습니다."
              action={{
                type: "external",
                route:
                  "https://www.youtube.com/channel/UCpV0ZdloVwvSjxHfnYYQPQg?sub_confirmation=1",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://cdn.jsdelivr.net/gh/aiengghgg/aiengghgg.github.io/src/assets/images/portfolios/bhban/researchgate.jpg"
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
                route: "https://bhban.kr",
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
