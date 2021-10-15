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
  duration,
  timeStamp,
  thumbnail,
  channelImage,
}) => {
  var views_new = views;
  if (views > 1000000000) {
    views_new = Math.floor((views / 1000000000) * 10) / 10 + "B";
  } else if (views > 1000000) {
    views_new = Math.round((views / 1000000) * 10) / 10 + "M";
  } else if (views > 1000) {
    views_new = parseInt(views / 1000) + "K";
  }

  var length = 60;
  var trimmedTitle = title.substring(0, length) + "...";

  return (
    <div className="video">
      <div className="video_thumb">
        <img src={thumbnail} alt="" />
        <span className="video_duration">{duration}</span>
      </div>

      <div className="video_info">
        <Avatar src={channelImage} className="video_avatar" />
        <div className="video_text">
          <h4>{trimmedTitle}</h4>
          <div className="video_moreinfo">
            <AccessTimeOutlined className="moreinfo_icon" />
            <QueueMusicOutlined className="moreinfo_icon" />
          </div>
          <MoreVertOutlined className="video_dots" />
          <p>{channel}</p>
          <p>
            {views_new} • {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
