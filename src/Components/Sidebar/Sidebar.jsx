import {
  ExpandMoreOutlined,
  ExploreOutlined,
  FeedbackOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  History,
  Home,
  OndemandVideo,
  SettingsOutlined,
  SignalCellularAltOutlined,
  SportsEsports,
  SportsHockeyOutlined,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Home" />
      <SidebarRow Icon={ExploreOutlined} title="Explore" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
      <div className="sidebar_subtitle">More from youtube</div>
      <SidebarRow Icon={SportsEsports} title="Gaming" />
      <SidebarRow Icon={SignalCellularAltOutlined} title="Live" />
      <SidebarRow Icon={SportsHockeyOutlined} title="Sport" />
      <hr />
      <SidebarRow Icon={SettingsOutlined} title="Settings" />
      <SidebarRow Icon={FlagOutlined} title="Report history" />
      <SidebarRow Icon={HelpOutlineOutlined} title="Help" />
      <SidebarRow Icon={FeedbackOutlined} title="Send feedback" />
      <hr />
      <div className="sidebar_footer">
        <p>About Press Copyright Contact us Creators Advertise Developers</p>
        <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
        <span>© 2021 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
