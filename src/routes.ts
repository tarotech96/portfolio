import { IRoute } from './typing/route';
import About from "./components/main/about/About";
import MySkill from './components/main/skills/MySkill';
import Work from './components/main/work/Work';
import Contact from './components/main/contact/Contact';
import Home from './components/Home';
import Blog from "./components/main/blog/Blog";

const appRoutes: IRoute[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/skills',
    component: MySkill
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/blog',
    component: Blog
  }
]

export default appRoutes;