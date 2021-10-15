import { TuneOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import $ from "jquery";
import "./search.scss";

const Search = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    $("body").css("overflow-y", "hidden");
    $(".sidebar").css("display", "initial");
    const req = axios
      .get(`https://yt-emiz.herokuapp.com/yt/api/v1/multiple/${searchQuery}`)
      .then((res) => {
        setSearchResults(res.data);
        setLoading(true);
      });
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
          {searchResults.map((searchResult) => (
            <Link
              to={`/watch/${searchResult.id}`}
              style={{ textDecoration: "none" }}
            >
              <VideoRow
                title={searchResult.title}
                views={searchResult.viewCount}
                subs="1.5M"
                duration={new Date(searchResult.duration * 1000)
                  .toISOString()
                  .substr(14, 5)}
                timestamp={searchResult.uploadDate}
                live={searchResult.isLive}
                image={searchResult.channel.thumbnails[0].url}
                thumbnail={searchResult.thumbnails[0].url}
                channel={searchResult.channel.name}
                description={searchResult.description}
              />
            </Link>
          ))}
        </>
      ) : (
        <div class="logo">
          <img class="icon" src="/yt.png" alt="" />
          <h1 class="name">YouTube</h1>
        </div>
      )}
    </div>
  );
};

export default Search;
