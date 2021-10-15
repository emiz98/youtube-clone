import {
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ShareOutlined,
  PlaylistAddOutlined,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import "./watchVideo.scss";

const WatchVideo = ({ video }) => {
  return (
    <div className="watchVideo">
      <ReactPlayer
        className="watchVideo_video"
        url={`https://www.youtube.com/watch?v=${video.id}`}
        playing
        controls
      />
      <div className="watchVideo_info">
        <div className="info_left">
          <h2>{video.title}</h2>
          <span>
            {video.viewCount} views • {video.uploadDate}
          </span>
        </div>
        <div className="info_right">
          <div className="infoIconContainer">
            <ThumbUpAltOutlined className="infoIcon" />
            <span>{video.likeCount}</span>
          </div>
          <div className="infoIconContainer">
            <ThumbDownOutlined className="infoIcon" />
            <span>{video.dislikeCount}</span>
          </div>
          <div className="infoIconContainer">
            <ShareOutlined className="infoIcon" />
            <span>Share</span>
          </div>
          <div className="infoIconContainer">
            <PlaylistAddOutlined className="infoIcon" />
            <span>Save</span>
          </div>
          <MoreHorizOutlined className="infoIcon" />
        </div>
      </div>
      <hr />
      <div className="watchVideo_channel">
        <div className="channel_left">
          <Avatar
            src={video?.channel?.thumbnails[0].url}
            className="channel_avatar"
          />
          <div className="channel_desc">
            <h4>{video?.channel?.name}</h4>
            <p>1M Subscribers</p>
          </div>
        </div>
        <div className="channel_right">
          <span>Subscribe</span>
        </div>
      </div>
      <p className="watchVideo_desc">{video.description}</p>
      <hr />
    </div>
  );
};

export default WatchVideo;
