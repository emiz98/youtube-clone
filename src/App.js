import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Recommended from "./Components/Recommended/Recommended";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Components/Search/Search";
import SidebarCollapsed from "./Components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import Watch from "./Components/Watch/Watch";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <div className="app_page">
              <Sidebar />
              <SidebarCollapsed />
              <Recommended />
            </div>
          </Route>
          <Route path="/search/:searchQuery/">
            <div className="app_page">
              <Sidebar />
              <SidebarCollapsed />
              <Search />
            </div>
          </Route>
          <Route path="/watch/:id/">
            <div className="app_page">
              <Sidebar />
              <SidebarCollapsed />
              <Watch />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
