import { Avatar } from "@material-ui/core";
import "./videoRow.scss";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  thumbnail,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={thumbnail} className="videoRow_thumb" />
      <div className="videoRow_info">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} •
          <span className="videoRow_subs">
            <span className="videoRow_subsNum">{subs}</span> Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <div className="videoRow_channel">
          <Avatar src={image} className="video_avatar" />
          <span>{channel}</span>
        </div>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
