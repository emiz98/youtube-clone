import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
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
      <VideoRow
        title="Hello There Attractive Youtube Thumbnail form here"
        views="660K"
        subs="1.5M"
        timestamp="59 seconds ago"
        image="https://avatars.githubusercontent.com/u/64089619?v=4"
        thumbnail="https://i.pinimg.com/564x/d4/94/76/d49476e6169ae02dd0eea882b1443586.jpg"
        channel="Menura Adithya"
        description="Hey guys, Thnx for watching this gaming mix in 8D Audio. Hope you enjoyed it. If you love our 8D mix then subscribe our channel and press bell🔔 icon."
      />
    </div>
  );
};

export default Search;
