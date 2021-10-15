import { Avatar } from "@material-ui/core";
import "./videoRow.scss";

const VideoRow = ({
  views,
  duration,
  subs,
  live,
  description,
  timestamp,
  channel,
  title,
  thumbnail,
  image,
}) => {
  var views_new = views;
  if (views > 1000000000) {
    views_new = Math.floor((views / 1000000000) * 10) / 10 + "B";
  } else if (views > 1000000) {
    views_new = Math.round((views / 1000000) * 10) / 10 + "M";
  } else if (views > 1000) {
    views_new = parseInt(views / 1000) + "K";
  }

  return (
    <div className="videoRow">
      <div className="videoRow_thumb">
        <img src={thumbnail} className="videoRow_thumb" />
        {duration != "00:00" ? (
          <span className="videoRow_duration">{duration}</span>
        ) : (
          <span></span>
        )}
      </div>

      <div className="videoRow_info">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {live ? (
            <span>{views_new} watching</span>
          ) : (
            <span>
              {views_new} views • {timestamp}
            </span>
          )}
          {/* {views} views • {timestamp} */}
        </p>
        <div className="videoRow_channel">
          <Avatar src={image} className="video_avatar" />
          <div className="videoRow_channel_info">
            <span className="videoRow_channel_title">{channel}</span>
            {/* <span className="videoRow_channel_infosubs">
              <span>{subs}</span> Subscribers
            </span> */}
          </div>
        </div>
        <p className="videoRow_description">{description}</p>
        {live ? <span className="videoRow_live">LIVE NOW</span> : ""}
      </div>
    </div>
  );
};

export default VideoRow;
