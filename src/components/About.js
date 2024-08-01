import React from 'react';
import image from '../images/demo.png'; // Correct the path to where your image is located

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Here is some content about me.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
