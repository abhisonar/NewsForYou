/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import NewsCard from "../NewsCard";
import { CardGroup } from "react-bootstrap";
import {useParams, withRouter} from 'react-router-dom'
import "./Home.css";
function Search() {
  const { searchitem } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getnews();
  }, [searchitem]);

  const getnews = async () => {
    const API_TOKEN = "1ac5cbdb9f6ace37cad7240e4d005629";
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${searchitem}&lang=en&country=in&token=${API_TOKEN}`
    );
    const data = await response.json();
    setNews(data.articles);
  };
  return (
    <div>
      <HeroSection
        header={`You Searched: ` + searchitem}
        bgImage={"https://source.unsplash.com/1600x900/?" + searchitem}
        typical={false}
      />
      <div className="random-news">
        <div className="random-news-header">
          <h1 className="section-header">Top Stories</h1>
        </div>
        {news ? (
          <CardGroup>
            {news.map((n) => (
              <NewsCard
                // key={}
                title={n.title}
                content={n.content}
                desc={n.description}
                urlImg={n.image}
                url={n.url}
                src_name={n.source.name}
                publishDate={n.publishedAt}
                src_url={n.source.url}
              />
            ))}
          </CardGroup>
        ) : (
          <h1>No Result found</h1>
        )}
      </div>
    </div>
  );
}

export default withRouter(Search);
