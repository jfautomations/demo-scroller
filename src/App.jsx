import React from 'react';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', 'yellow', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const FONTFAMILY = ['cursive','fantasy','emoji','fansong','math','monospace','sans-serif']
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 7;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({text, color, font}) => (
  <div className='tag' style={{ 'color': color, 'font-family' : font}}>
  <span>#</span>
  {text}
  </div>
);

const App = () => (
  <div className='app'>
    <header>
      <h1>Your Company Name</h1>
      <p>Your Services</p>
    </header>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} 
          duration={random(DURATION - 5000, DURATION + 5000)} 
          reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} color={COLORS[random(0,6)]} font={FONTFAMILY[random(0,6)]} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
    <a id="source-link" className="meta-link" href="https://haf.solutions" target="_blank">
        <i className="fa-solid fa-link"></i>
        <span className="roboto-mono">Contact Us</span>
      </a>
  </div>
);

export default App;