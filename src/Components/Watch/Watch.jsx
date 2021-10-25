import { useParams } from "react-router";
import "./watch.scss";
import $ from "jquery";
import WatchVideo from "../WatchVideo/WatchVideo";
import { useEffect } from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import axios from "axios";
import { useState } from "react";
import responses from "./responses";

const Watch = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    $("body").css("overflow-y", "scroll");
    $(".sidebar").css("display", "none");
    $(".sidebarCollapsed").css("display", "none");
    setLoading(true);
    // const req = axios
    //   .get(``)
    //   .then((res) => {
    //     setVideoDetails(res.data);
    //     setLoading(true);
    //   });
  }, [id]);

  return (
    <div className="watch">
      {Loading ? (
        <>
          <div className="watch_col1">
            <div className="watchVideo">
              <WatchVideo video={responses} />
            </div>
          </div>
          <div className="watch_col2">
            {responses?.related?.map((relatedVideo) => (
              <RelatedVideos key={relatedVideo.id} video={relatedVideo} />
            ))}
          </div>
        </>
      ) : (
        <div className="logo">
          <img className="icon" src="/yt.png" alt="" />
          <h1 className="name">YouTube</h1>
        </div>
      )}
      {/* Comments */}
    </div>
  );
};

export default Watch;
