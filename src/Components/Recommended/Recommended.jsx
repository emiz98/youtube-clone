import Video from "../Video/Video";
import "./recommended.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Link } from "react-router-dom";
import response from "./response";

const Recommended = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    $("body").css("overflow-y", "hidden");
    $(".sidebar").css("display", "initial");
    setLoading(true);
    // const req = axios.get(``).then((res) => {
    //   setRecommendedVideos(res.data);
    //   setLoading(true);
    //   console.log(res.data);
    // });

    // const tempArr = [];
    // for (let index = 0; index < response.length; index++) {
    //   console.log(response[index].id);
    // }
  }, []);

  return (
    <div className="recommended">
      {Loading ? (
        <div className="recommended_videos">
          {response.map((responseData) => (
            <Link
              key={responseData.id}
              to={`/watch/${responseData.id}`}
              style={{ textDecoration: "none" }}
            >
              <Video
                title={responseData.title}
                views={responseData.viewCount}
                timeStamp={responseData.uploadDate}
                channel={responseData.channel.name}
                thumbnail={responseData.thumbnails[0].url}
                channelImage={responseData.channel.thumbnails[0].url}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="logo">
          <img className="icon" src="/yt.png" alt="" />
          <h1 className="name">YouTube</h1>
        </div>
      )}
    </div>
  );
};

export default Recommended;
