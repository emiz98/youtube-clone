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
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_center">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header_search" />
        </Link>
        <MicOutlined className="header_right_icon" />
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
