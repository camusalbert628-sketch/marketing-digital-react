import React, { useState, useEffect } from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';
import Slide11 from './components/Slide11';
import Slide12 from './components/Slide12';
import Slide13 from './components/Slide13';
import Slide14 from './components/Slide14';
import Slide15 from './components/Slide15';
import Slide16 from './components/Slide16';
import Slide17 from './components/Slide17';
import Slide18 from './components/Slide18';
import Slide19 from './components/Slide19';
import Slide20 from './components/Slide20';
import Slide21 from './components/Slide21';
import Slide22 from './components/Slide22';
import Slide23 from './components/Slide23';
import Slide24 from './components/Slide24';
import Slide25 from './components/Slide25';
import Slide26 from './components/Slide26';
import Slide27 from './components/Slide27';
import Slide28 from './components/Slide28';
import Slide29 from './components/Slide29';
import Slide30 from './components/Slide30';
import Slide31 from './components/Slide31';
import Slide32 from './components/Slide32';
import Slide33 from './components/Slide33';
import Slide34 from './components/Slide34';
import Slide35 from './components/Slide35';
import Slide36 from './components/Slide36';
import Slide37 from './components/Slide37';
import Slide38 from './components/Slide38';
import Slide39 from './components/Slide39';
import Slide40 from './components/Slide40';
import './App.css';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
  Slide24,
  Slide25,
  Slide26,
  Slide27,
  Slide28,
  Slide29,
  Slide30,
  Slide31,
  Slide32,
  Slide33,
  Slide34,
  Slide35,
  Slide36,
  Slide37,
  Slide38,
  Slide39,
  Slide40,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Instantiate active slide component dynamically
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="presentation-container">
      {/* Keyboard hints overlay */}
      <div className="keyboard-tips">
        <i className="fas fa-keyboard" style={{ marginRight: '6px' }}></i>
        Navigation : ← ou → | Espace
      </div>

      {/* Side Navigation Buttons */}
      {currentSlide > 0 && (
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Slide précédente">
          <i className="fas fa-chevron-left"></i>
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button className="nav-btn next" onClick={nextSlide} aria-label="Slide suivante">
          <i className="fas fa-chevron-right"></i>
        </button>
      )}

      {/* Slide Wrapper (fluid full-page rendering) */}
      <div className="slide-wrapper">
        <CurrentSlideComponent onStart={nextSlide} />
      </div>

      {/* Slide Indicator and Controls Overlay */}
      <div className="controls-overlay">
        <button 
          className="mini-nav-btn" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          title="Précédent"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        
        <span className="slide-indicator">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button 
          className="mini-nav-btn" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          title="Suivant"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
