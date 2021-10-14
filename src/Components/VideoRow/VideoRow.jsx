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
      <img src={thumbnail} alt="" />
      <div className="videoRow_info">
        <h4>{title}</h4>
        <p className="videoRow_headline">
          {channel} •
          <span className="videoRow_subs">
            <span className="videoRow_subsNum">{subs}</span> Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
