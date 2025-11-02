import { useState, useEffect } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/DancingCat.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  // Keyboard accessibility - Space key to toggle
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAnimating]);

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        role="img"
        aria-label="Animated dancing cat"
      >
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>

      <button
        onClick={toggleAnimation}
        className="control-button"
        aria-label={isAnimating ? 'Pause animation' : 'Start animation'}
        aria-pressed={isAnimating}
      >
        {isAnimating ? '⏸ Pause Dance' : '▶ Start Dance'}
      </button>

      <p className="subtitle" aria-live="polite">
        {isAnimating ? 'Look at me dancing! 💃' : 'Click to make me dance!'}
      </p>

      <p className="keyboard-hint">
        💡 Press <kbd>Space</kbd> to toggle animation
      </p>
    </div>
  );
}

export default DancingCat;
