import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import BalanceIcon from "@mui/icons-material/Balance";
import AboutUs from "layouts/pages/about-us";
import Vision from "layouts/pages/vision";
import Bhban from "members/Bhban";
import Hmok from "members/Hmok";
import Jlee from "members/Jlee";
import Jkim from "members/Jkim";

const routes = [
  {
    name: "AI. Eng.",
    icon: <BalanceIcon />,
    collapse: [
      {
        name: "About Us",
        description: "Who we are, What we think",
        route: "/about-us",
        component: <AboutUs />,
      },
      {
        name: "Vision",
        description: "AI for English Learning",
        route: "/vision",
        component: <Vision />,
      },
    ],
  },
  {
    name: "Members",
    icon: <GroupsIcon />,
    collapse: [
      {
        name: "B. Ban",
        route: "/bban",
        component: <Bhban />,
      },
      {
        name: "H. Hwang",
        route: "/hhwang",
        component: <Hmok />,
      },
      {
        name: "J. Lee",
        route: "/jlee",
        component: <Jlee />,
      },
      {
        name: "J. Kim",
        route: "/jkim",
        component: <Jkim />,
      },
    ],
  },
  {
    name: "Features",
    icon: <SchoolIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Engineering",
        collapse: [
          {
            name: "Papers",
            route: "/papers",
            component: <AboutUs />,
          },
          {
            name: "Apps",
            route: "/apps",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "Education",
        collapse: [
          {
            name: "Publications",
            route: "/publications",
            component: <Bhban />,
          },
          {
            name: "Online Courses",
            route: "/online_courses",
            component: <Bhban />,
          },
        ],
      },
    ],
  },
];

export default routes;
