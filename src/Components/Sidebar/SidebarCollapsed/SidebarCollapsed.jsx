import {
  ExploreOutlined,
  Home,
  Subscriptions,
  VideoLibrary,
  History,
} from "@material-ui/icons";
import "./sidebarCollapsed.scss";
import SidebarCollapsedRow from "./SidebarCollapsedRow";

const SidebarCollapsed = () => {
  return (
    <div className="sidebarCollapsed">
      <SidebarCollapsedRow selected Icon={Home} title="Home" />
      <SidebarCollapsedRow Icon={ExploreOutlined} title="Explore" />
      <SidebarCollapsedRow Icon={Subscriptions} title="Subscriptions" />
      <SidebarCollapsedRow Icon={VideoLibrary} title="Library" />
      <SidebarCollapsedRow Icon={History} title="History" />
    </div>
  );
};

export default SidebarCollapsed;
