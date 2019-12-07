import './App.scss';
import React from 'react';
// Material
import Button from '@material/react-button';

import imageURL from './brand.jpg';

const App: React.FC = () => {
  return (
    <div className="Area Area--hero">
      <div className="Area_head"></div>
      <div className="Area_body">
        <div className="Area_body_image | mdc-elevation--z1">
          <img src={imageURL} alt="Serhiy Ivaneyko" />
        </div>
        <h1 className="Area_body_title">Hi, I`m Serhiy, web developer</h1>
        <p className="Area_body_description">Front End Developer / Web Developer</p>
      </div>
      <div className="Area_foot">
        <Button
          className="Area_foot_link"
          href="https://www.facebook.com/serhiy.ivaneyko"
          target="_blank"
        >Facebook</Button>
        <Button
          className="Area_foot_link"
          href="https://www.github.io/ivaneyko"
          target="_blank"
        >Github</Button>
        <Button
          className="Area_foot_link"
          href="https://www.linkedin.com/in/serhiy-ivaneyko"
          target="_blank"
        >LinkedIn</Button>
      </div>
    </div>
  );
}

export default App;
