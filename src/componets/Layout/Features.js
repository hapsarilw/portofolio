import React from "react";
import FeaturesStyles from "./FeaturesStyles";

export default function Features() {
  return (
    <FeaturesStyles>
      <div id="featured-list">
        <div id="advancedSearch" className="bg-grey px-20 pt-20">
          <h1>Advanced Statictic</h1>
          <h3>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </h3>
        </div>
        <div id="features" className="bg-grey p-20">
          <div id="featured-item" className="">
            <h1>Brand Recognation</h1>
            <h3>
              Boost your brand recognation with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </h3>
          </div>
          <div id="featured-item">
            <h1>Detailed Records</h1>
            <h3>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </h3>
          </div>
          <div id="featured-item">
            <h1>Fully Customizable</h1>
            <h3>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </h3>
          </div>
        </div>
      </div>
      <div  id="boots-link" className="bg-boost-pattern">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </FeaturesStyles>
  );
}
