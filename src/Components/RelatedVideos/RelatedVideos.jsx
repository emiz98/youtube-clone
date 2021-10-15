import { Link } from "react-router-dom";
import "./relatedVideos.scss";
import RVideo from "./RVideo";

const RelatedVideos = ({ video }) => {
  var length = 35;
  var trimmedTitle = video?.title.substring(0, length) + "...";
  return (
    <div className="relatedVideos">
      <Link to={`/watch/${video?.id}`} style={{ textDecoration: "none" }}>
        <RVideo
          title={trimmedTitle}
          id={video?.id}
          channel={video?.channel?.name}
          views={video?.viewCount}
          timestamp={video?.uploadDate}
          duration={video?.duration}
          thumbnail={video?.thumbnails[0].url}
        />
      </Link>
    </div>
  );
};

export default RelatedVideos;
