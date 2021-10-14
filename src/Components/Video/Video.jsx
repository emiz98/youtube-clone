import { Avatar } from "@material-ui/core";
import {
  AccessTimeOutlined,
  MoreVertOutlined,
  QueueMusicOutlined,
} from "@material-ui/icons";
import "./video.scss";

const Video = ({
  title,
  channel,
  views,
  timeStamp,
  thumbnail,
  channelImage,
}) => {
  return (
    <div className="video">
      <img src={thumbnail} alt="" />
      <span className="video_duration">3.14</span>
      <div className="video_info">
        <Avatar src={channelImage} className="video_avatar" />
        <div className="video_text">
          <h4>{title}</h4>
          <div className="video_moreinfo">
            <AccessTimeOutlined className="moreinfo_icon" />
            <QueueMusicOutlined className="moreinfo_icon" />
          </div>
          <MoreVertOutlined className="video_dots" />
          <p>{channel}</p>
          <p>
            {views} • {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
