import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store/store';
import '../styles/Summary.css';

/**
 * Summary component
 * - Renders a summary of the answers
 * - Displays the questions and answers
 * @returns 
 */
const Summary: React.FC = () => {
  // Get steps and answers from Redux store
  const { steps, answers } = useSelector((state: AppState) => state.steps);
  // State to manage reveal animation
  const [reveal, setReveal] = useState(false);

  // Reveal summary on mount
  useEffect(() => {
    setReveal(true);
  }, []);

  // Render summary
  return (
    <div className={`summary ${reveal ? 'reveal' : ''}`}>
      <div className="summary-title">Q & A</div>
      {steps.map((step, index) => (
        <div key={index} className="summary-item">
          <span className="summary-question">{step.title}:</span>
          <span className="answer">{answers[index]?.label || 'No answer'}</span>
        </div>
      ))}
    </div>
  );
};

export default Summary;
