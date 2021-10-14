import { Avatar } from "@material-ui/core";
import { CheckCircleOutlined } from "@material-ui/icons";
import "./channelRow.scss";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_image" src={image} alt={channel} />
      <div className="channelRow_info">
        <h4>
          {channel} {verified && <CheckCircleOutlined />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
