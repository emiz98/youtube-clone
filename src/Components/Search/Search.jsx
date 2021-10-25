import { TuneOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import $ from "jquery";
import response from "./response";
import "./search.scss";

const Search = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    $("body").css("overflow-y", "hidden");
    $(".sidebar").css("display", "initial");
    setLoading(true);

    // const req = axios
    //   .get(``)
    //   .then((res) => {
    //     setSearchResults(res.data);
    //     console.log(res.data);
    //     setLoading(true);
    //   });
  }, [searchQuery]);

  return (
    <div className="search">
      {Loading ? (
        <>
          <div className="search_filter">
            <TuneOutlined />
            <h2>Filters</h2>
          </div>
          <hr />
          <ChannelRow
            image="https://avatars.githubusercontent.com/u/64089619?v=4"
            channel="Menura Adithya"
            verified
            subs="1.5M"
            noOfVideos={382}
            description="Hey guys, Thnx for watching this gaming mix in 8D Audio. Hope you enjoyed it. If you love our 8D mix then subscribe our channel and press bell🔔 icon."
          />
          <hr />
          {response.map((responseData) => (
            <Link
              key={responseData.id}
              to={`/watch/${responseData.id}`}
              style={{ textDecoration: "none" }}
            >
              <VideoRow
                title={responseData.title}
                views={responseData.viewCount}
                subs="1.5M"
                duration={new Date(responseData.duration * 1000)
                  .toISOString()
                  .substr(14, 5)}
                timestamp={responseData.uploadDate}
                live={responseData.isLive}
                image={responseData.channel.thumbnails[0].url}
                thumbnail={responseData.thumbnails[0].url}
                channel={responseData.channel.name}
                description={responseData.description}
              />
            </Link>
          ))}
        </>
      ) : (
        <div className="logo">
          <img className="icon" src="/yt.png" alt="" />
          <h1 className="name">YouTube</h1>
        </div>
      )}
    </div>
  );
};

export default Search;
