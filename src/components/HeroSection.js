import React from "react";
import "./HeroSection.css";
import Typical from "react-typical";
function HeroSection({header,bgImage,typical}) {
  return (
    <section id="hero" data-aos="fade-left" data-aos-easing="ease-in-out" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="hero mycontainer">
        <div className="hero-header">
          <div className="hero-head">Get Updates on</div>
          <div className="hero-head">
            {typical ? (
              <Typical
                className="typical"
                steps={[
                  "technology",
                  1000,
                  "entertainment",
                  1000,
                  "general",
                  1000,
                  "health",
                  1000,
                  "science",
                  1000,
                  "sports",
                  1000,
                  "business",
                  1000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            ) : (
              <div className="hero-head blink">{header}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
