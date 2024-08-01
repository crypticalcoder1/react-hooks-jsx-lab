import React from 'react';

// Replace these variables with your actual name and city
const name = "Your Name"; // Replace with your name
const city = "Your City"; // Replace with your city

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

