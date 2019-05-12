import Intro from "../components/Intro";
import SidenavStyle from "./styles/SidenavStyle";
import MainStyle from "./styles/MainStyle";
import Links from "./Links";
import Info from "./Info";
import ThemeSwitch from "./ThemeSwitch";
import Post from "../components/Post";

const Layout = props => (
  <>
    <SidenavStyle>
      <Intro />
      <Links />
      <Info />
      <ThemeSwitch />
    </SidenavStyle>
    <MainStyle>
      <Post />
    </MainStyle>
  </>
)

export default Layout
