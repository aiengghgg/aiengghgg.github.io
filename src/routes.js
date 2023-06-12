import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Apps from "pages/Apps";
import Books from "pages/Books";
import Papers from "pages/Papers";
import OnlineCourses from "pages/Online Courses";
import Bhban from "members/Bhban";
import Hmok from "members/Hmok";
import Jlee from "members/Jlee";
import Jkim from "members/Jkim";
import JaneKim from "members/JaneKim";

const routes = [
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
      {
        name: "Y. Kim",
        route: "/janekim",
        component: <JaneKim />,
      },
    ],
  },
  {
    name: "Education",
    icon: <MenuBookIcon />,
    collapse: [
      {
        name: "Publications",
        route: "/publications",
        component: <Books />,
      },
      {
        name: "Online Courses",
        route: "/online_courses",
        component: <OnlineCourses />,
      },
    ],
  },
  {
    name: "Research",
    icon: <SchoolIcon />,
    collapse: [
      {
        name: "Papers",
        route: "/papers",
        component: <Papers />,
      },
      {
        name: "Apps",
        route: "/apps",
        component: <Apps />,
      },
    ],
  },
];

export default routes;
