import Video from "../Video/Video";
import "./recommended.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    $("body").css("overflow-y", "hidden");
    $(".sidebar").css("display", "initial");

    const req = axios
      .get(
        `https://yt-emiz.herokuapp.com/yt/api/v1/multiple/music video trending`
      )
      .then((res) => {
        setRecommendedVideos(res.data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="recommended">
      {Loading ? (
        <div className="recommended_videos">
          {recommendedVideos.map((recommendedVideo) => (
            <Link
              to={`/watch/${recommendedVideo.id}`}
              style={{ textDecoration: "none" }}
            >
              <Video
                title={recommendedVideo.title}
                views={recommendedVideo.viewCount}
                timeStamp={recommendedVideo.uploadDate}
                channel={recommendedVideo.channel.name}
                thumbnail={recommendedVideo.thumbnails[0].url}
                channelImage={recommendedVideo.channel.thumbnails[0].url}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div class="logo">
          <img class="icon" src="/yt.png" alt="" />
          <h1 class="name">YouTube</h1>
        </div>
      )}
    </div>
  );
};

export default Recommended;
