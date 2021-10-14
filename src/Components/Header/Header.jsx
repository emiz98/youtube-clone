import { Avatar } from "@material-ui/core";
import {
  Apps,
  Menu,
  MicOutlined,
  NotificationsNoneOutlined,
  Search,
  VideoCallOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <Menu />
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="yt"
          />
          <span className="header_region">LK</span>
        </Link>
      </div>
      <div className="header_center">
        <div className="header_center_inner">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search"
            type="text"
            value={inputSearch}
          />
          <Link to={`/search/${inputSearch}`}>
            <Search className="header_search" />
          </Link>
        </div>
        <MicOutlined className="header_right_icon mic" />
      </div>
      <div className="header_right">
        <VideoCallOutlined className="header_right_icon" />
        <Apps className="header_right_icon" />
        <NotificationsNoneOutlined className="header_right_icon" />
        <Avatar src="https://avatars.githubusercontent.com/u/64089619?v=4" />
      </div>
    </div>
  );
};

export default Header;
