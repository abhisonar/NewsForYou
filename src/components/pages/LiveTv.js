import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import ajtak from "../images/ajtak.png"
import cnbc from "../images/cnbc.png";
import india_today from "../images/india_today.jpg";
import indiatv from "../images/indiatv.jpg";
import news_nation from "../images/news_nation.jpg";
import tv9 from "../images/tv9.jpg";
import zeenews from "../images/zeenews.jpg";
import abp from "../images/abp.webp";
import './LiveTv.css'
import { NavLink, } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LiveTv() {
    return (
      <div className="live-tv my-3">
        <Router>
          <Switch>
            <Route
              path="/live-tv"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/lXZkZgwLhSw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/ajtak"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/cnX9fQEq59A"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/cnbc"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/Kxwrqig5UV4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/india_today"
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/heFq-5rmUTY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/tv9"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/-Ku6BOxFIkc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/indiatv"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/k9MyH_YJp-0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/news_nation"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/cio591MYmxs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/zeenews"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/66Yr1Vo8NQs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
            <Route
              path="/abp"
              
              render={() => (
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/odmHZVWb7ws"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            />
          </Switch>
          <Carousel>
            <Carousel.Item interval={2000}>
              <NavLink className="live-tv-link" to="/ajtak">
                <img src={ajtak} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/cnbc">
                <img src={cnbc} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/india_today">
                <img src={india_today} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/tv9">
                <img src={tv9} alt="" className="d-block" />
              </NavLink>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <NavLink className="live-tv-link" to="/indiatv">
                <img src={indiatv} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/news_nation">
                <img src={news_nation} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/zeenews">
                <img src={zeenews} alt="" className="d-block" />
              </NavLink>
              <NavLink className="live-tv-link" to="/zeenews">
                <img src={abp} alt="" className="d-block" />
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </Router>
      </div>
    );
}

export default LiveTv
