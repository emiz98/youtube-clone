import { useParams } from "react-router";
import "./watch.scss";
import $ from "jquery";
import WatchVideo from "../WatchVideo/WatchVideo";
import { useEffect } from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import axios from "axios";
import { useState } from "react";

const Watch = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    $("body").css("overflow-y", "scroll");
    $(".sidebar").css("display", "none");
    $(".sidebarCollapsed").css("display", "none");

    const req = axios
      .get(`https://yt-emiz.herokuapp.com/yt/api/v1/target/${id}`)
      .then((res) => {
        setVideoDetails(res.data);
        setLoading(true);
      });
  }, [id]);

  return (
    <div className="watch">
      {Loading ? (
        <>
          <div className="watch_col1">
            <div className="watchVideo">
              <WatchVideo video={videoDetails} />
            </div>
          </div>
          <div className="watch_col2">
            {videoDetails?.related?.map((relatedVideo) => (
              <RelatedVideos video={relatedVideo} />
            ))}
          </div>
        </>
      ) : (
        <div class="logo">
          <img class="icon" src="/yt.png" alt="" />
          <h1 class="name">YouTube</h1>
        </div>
      )}
      {/* Comments */}
    </div>
  );
};

export default Watch;
