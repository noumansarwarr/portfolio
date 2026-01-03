import React, { useState } from 'react';
import { techStack } from '../data/techStack';
import './TechStack.css';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  const categories = Object.keys(techStack);

  return (
    <section id="stack" className="section tech-stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Tools I use daily, grouped by what they help me do. 
          Not a list of logos - actual context on when and why.
        </p>

        <div className="stack-tabs">
          {categories.map((key) => (
            <button
              key={key}
              className={`stack-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {techStack[key].title}
            </button>
          ))}
        </div>

        <div className="stack-content">
          <p className="stack-description">
            {techStack[activeCategory].description}
          </p>

          <div className="stack-items">
            {techStack[activeCategory].items.map((item, index) => (
              <div key={index} className="stack-item">
                <h4 className="stack-item-name">{item.name}</h4>
                <p className="stack-item-usage">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
