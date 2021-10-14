import { Avatar } from "@material-ui/core";
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
      <div className="video_info">
        <Avatar src={channelImage} className="video_avatar" />
        <div className="video_text">
          <h4>{title}</h4>
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
