/*
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
*/
import MKTypography from "components/MKTypography";
import logoCT from "assets/images/square.png";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "/",
  },
  /*
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  */
  menus: [
    {
      name: "AI. Eng.",
      items: [
        { name: "About Us", href: "https://www.creative-tim.com/presentation" },
        { name: "Vision", href: "https://www.creative-tim.com/templates/free" },
      ],
    },
    {
      name: "Members",
      items: [
        { name: "B.Ban", href: "https://needleworm.github.io/" },
        {
          name: "H.Hwang",
          href: "https://www.linkedin.com/in/%ED%98%84%EB%AA%A9-%ED%99%A9-371baa26a",
        },
        { name: "J.Lee", href: "https://www.linkedin.com/in/jejong" },
        { name: "J.Kim", href: "https://www.linkedin.com/in/ziorl" },
      ],
    },
    {
      name: "Features",
      items: [
        { name: "Research", href: "https://www.creative-tim.com/contact-us" },
        { name: "Publications", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "Online Courses", href: "https://services.creative-tim.com/" },
        { name: "Social Contributions", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Materials",
      items: [{ name: "Voca Quiz App", href: "https://needleworm.github.io/ai_voca" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AI.Eng.
    </MKTypography>
  ),
};
