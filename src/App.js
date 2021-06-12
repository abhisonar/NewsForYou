import './App.css';
import Home from './components/pages/Home';
import Sports from "./components/pages/Sports";
import Tech from "./components/pages/Tech";
import Science from "./components/pages/Science";
import Health from "./components/pages/Health";
import Entertainment from "./components/pages/Entertainment";

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from './components/TopNav';
import LiveTv from './components/pages/LiveTv';
import Footer from './components/Footer';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Navbar />
        <Switch>
          <Route path="/NewsForYou" exact component={Home} />
          <Route path="/NewsForYou/sports" exact component={Sports} />
          <Route path="/NewsForYou/tech" component={Tech} />
          <Route path="/NewsForYou/science" exact component={Science} />
          <Route path="/NewsForYou/health" exact component={Health} />
          <Route
            path="/NewsForYou/entertainment"
            exact
            component={Entertainment}
          />
          <Route path="/NewsForYou/live-tv" component={LiveTv} />
          <Route path="/NewsForYou/search/:searchitem" component={Search} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
