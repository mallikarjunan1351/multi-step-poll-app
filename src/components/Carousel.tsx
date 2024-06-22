import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, AppDispatch } from '../redux/store/store';
import { setCurrentStep } from '../redux/actions/stepActions';
import '../styles/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Custom arrow components
const CustomArrow = ({ direction, onClick }: { direction: string; onClick: () => void }) => {
  return (
    <div className={`slick-${direction}`} role="button" aria-label={direction === 'up' ? 'chevron-up' : 'chevron-down'} onClick={onClick}>
      <FontAwesomeIcon icon={direction === 'up' ? faChevronUp : faChevronDown} />
    </div>
  );
};

// Custom dot component
const CustomDot = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <div className={`custom-dot ${isActive ? 'active' : ''}`} role="button" onClick={onClick} />
  );
};

/**
 * Carousel component
 * - Renders a carousel with custom arrows and dots
 * - Displays questions based on the current step
 * - Handles step change on arrow and dot click
 * - Uses Redux to manage state
 * - Uses custom arrow and dot components
 * @returns 
 */
const Carousel: React.FC = () => {
  // Get steps and current step from Redux store
  const dispatch = useDispatch<AppDispatch>();
  // State to manage active index and show question
  const { steps, currentStep } = useSelector((state: AppState) => state.steps);
  // State to manage active index and show question
  const [activeIndex, setActiveIndex] = useState(currentStep);
  // State to show question
  const [showQuestion, setShowQuestion] = useState(false);

  // Update active index and show question on step change
  useEffect(() => {
    setShowQuestion(false);
    const timeout = setTimeout(() => {
      setActiveIndex(currentStep);
      setShowQuestion(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, [currentStep]);

  // Handle prev arrow click
  const handlePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      dispatch(setCurrentStep(newIndex));
    }
  };

  // Handle next arrow click
  const handleNext = () => {
    if (activeIndex < steps.length) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      dispatch(setCurrentStep(newIndex));
    }
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    dispatch(setCurrentStep(index));
  };

  // Render carousel
  return (
    <div className="carousel">
      {/* Render up arrow */}
      <CustomArrow direction="up" onClick={handlePrev} />
      <div className="carousel-content">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : index < activeIndex ? 'prev' : 'next'}`}
          >
          </div>
        ))}
      </div>
      {/* Display Questions */}
      <div className={`question ${showQuestion ? 'show' : ''}`}>
        {steps[currentStep]?.title || 'Summary'}
      </div>
      {/* Render down arrow */}
      <CustomArrow direction="down" onClick={handleNext} />
      <div className="slick-dots">
        {steps.map((_, index) => (
          // Render custom dot
          <CustomDot
            key={index}
            isActive={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;