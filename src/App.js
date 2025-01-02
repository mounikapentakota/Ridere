import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/MyNavbar.jsx';
import Footer from './component/Footer.jsx'
import Card from './component/Card.jsx'
import CountSection from './component/countSection';
import FAQApp from './component/faqComponent';
// import Myvideo from './component/Video';
import MyCarousel from './component/Ncarousal';
import Videocomponent from './component/VideoComponent';

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${scrolled ? 'scrolled' : ''}`}>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="fixed-carousel">
        <MyCarousel />

      </div>
      {/* <Myvideo /> */}
      <Videocomponent/>


      <div className="card-container">
        <Card />

      </div>
      <CountSection />
      <FAQApp />


      <Footer />
    </div>
  );
}

export default App;
