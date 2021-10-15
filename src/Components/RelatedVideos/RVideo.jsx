import "./rVideo.scss";

const RVideo = ({ title, channel, views, timestamp, duration, thumbnail }) => {
  return (
    <div className="rVideo">
      <div className="rVideo_left">
        <img src={thumbnail} alt="" />
        <span>{duration}</span>
      </div>
      <div className="rVideo_right">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} views • {timestamp}
        </p>
      </div>
    </div>
  );
};

export default RVideo;
