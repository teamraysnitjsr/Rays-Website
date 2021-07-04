import Home from "../../Pages/Home/home.pages";
import About from "../../Pages/About/about.pages";
import Achievements from "../../Pages/Achievements/achievements.pages";
import Contact from "../../Pages/Contact Us/contact.pages";
import Teams from "../../Pages/Teams/teams.pages";
import Sponsor from "../../Pages/Sponsor/sponsor.pages";
export const Routes = [
  {
    id: 1,
    component: Home,
    path: "/",
    exact: true,
  },
  {
    id: 2,
    component: About,
    path: "/about",
    exact: true,
  },
  {
    id: 3,
    component: Achievements,
    path: "/achievements",
    exact: true,
  },
  {
    id: 4,
    component: Contact,
    path: "/contact",
    exact: true,
  },
  {
    id: 5,
    component: Teams ,
    path: "/teams",
    exact: true,
  },
  {
    id: 6,
    component: Sponsor,
    path: "/sponsor",
    exact: true,
  },
  
];
