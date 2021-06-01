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

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sports" exact component={Sports} />
          <Route path="/tech" component={Tech} />
          <Route path="/science" exact component={Science} />
          <Route path="/health" exact component={Health} />
          <Route path="/entertainment" exact component={Entertainment} />
          <Route path="/live-tv" exact component={LiveTv} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
