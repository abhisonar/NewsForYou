/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react'
import HeroSection from '../HeroSection'
import NewsCard from '../NewsCard';
import { CardGroup } from "react-bootstrap";
import "./Home.css"
function Home() {
  const [news, setNews] = useState([]);

    useEffect(() => {
        getnews();
    },[])

  const getnews = async () => {
      const API_TOKEN = "1ac5cbdb9f6ace37cad7240e4d005629";
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${API_TOKEN}`
      );
      const data = await response.json();
      setNews(data.articles);
    };
    return (
      <div>
        <HeroSection
          header="Sports"
          bgImage="https://source.unsplash.com/1600x900/?news"
          typical={true}
        />
        <div className="random-news">
          <div className="random-news-header">
            <h1 className="section-header">Top Stories</h1>
          </div>
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
        </div>
      </div>
    );
}

export default Home