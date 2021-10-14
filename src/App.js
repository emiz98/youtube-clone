import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Recommended from "./Components/Recommended/Recommended";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <div className="app_page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <Search />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
