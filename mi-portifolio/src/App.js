import React, { useState } from "react";
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <a href="#">My Portfolio</a>
          </div>
          <div className="toggle" onClick={toggleNav}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>This is where I showcase my work and share my story.</p>
          <a href="#portfolio" className="btn">View My Portfolio</a>
        </section>
        <section id="portfolio">
          <h2>My Portfolio</h2>
          <div className="gallery">
            <div className="item">
              <img src="img/portfolio-1.jpg" alt="Project Title" />
              <h3>Project Title</h3>
              <p>Project Description</p>
              <a href="#" className="btn">Learn More</a>
            </div>
            <div className="item">
              <img src="img/portfolio-2.jpg" alt="Project Title" />
              <h3>Project Title</h3>
              <p>Project Description</p>
              <a href="#" className="btn">Learn More</a>
            </div>
            <div className="item">
              <img src="img/portfolio-3.jpg" alt="Project Title" />
              <h3>Project Title</h3>
              <p>Project Description</p>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <img src="img/profile-pic.jpg" alt="Profile Picture" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus metus. Quisque ac dignissim dolor, ac volutpat ipsum. Donec euismod ante sit amet quam placerat suscipit. Proin semper mollis purus, sed sollicitudin nisl dictum et.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
