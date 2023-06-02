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
              image="https://cdn.jsdelivr.net/gh/needleworm/aieng/src/assets/images/portfolios/jlee/books.jpg"
              title="Books"
              description="인공지능과 빅데이터 기술을 활용한 영어 교육 방법을 정리한 교재를 출판했습니다."
              action={{
                type: "external",
                route: "https://search.shopping.naver.com/book/catalog/37153902621",
                color: "info",
                label: "Go!",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="LinkedIn"
              description="더 상세한 정보를 열람하시려면?"
              action={{
                type: "external",
                route: "https://www.linkedin.com/in/%ED%98%84%EB%AA%A9-%ED%99%A9-371baa26a/",
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
