import MKTypography from "components/MKTypography";
import logoCT from "assets/images/square.png";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "/",
  },
  menus: [
    {
      name: "Members",
      items: [
        { name: "B.Ban", route: "/bban" },
        { name: "H.Hwang", route: "/hhwang" },
        { name: "J.Lee", route: "/jlee" },
        { name: "J.Kim", route: "/jkim" },
      ],
    },
    {
      name: "Research",
      items: [
        { name: "Papers", route: "/papers" },
        { name: "Apps", route: "/apps" },
      ],
    },
    {
      name: "Education",
      items: [
        { name: "Publications", route: "/publications" },
        { name: "Online Courses", route: "/online_courses" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AI.Eng.
    </MKTypography>
  ),
};
