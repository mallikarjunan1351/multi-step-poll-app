import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import { AppState, AppDispatch } from '../redux/store/store';
import { selectOption } from '../redux/actions/stepActions';
import '../styles/Step.css';

interface StepProps {
  stepIndex: number;
}

/**
 * Step component
 * - Renders options for the current step
 * - Handles option selection
 * @param param0
 * @returns 
 */
const Step: React.FC<StepProps> = ({ stepIndex }) => {
  // Get dispatch function from Redux store
  const dispatch = useDispatch<AppDispatch>();
  // Get steps and answers from Redux store
  const { steps, answers } = useSelector((state: AppState) => state.steps);

  // Render options for the current step
  return (
    <div className="step flex flex-col items-center">
      <div className="options flex flex-col items-center">
        {steps[stepIndex].options.map((option, index) => (
          // Tooltip component
          <Tooltip key={index} title={option.label} arrow>
            <div
              className={`option flex items-center m-2 cursor-pointer relative ${answers[stepIndex] === option ? 'selected' : ''}`}
              onClick={() => dispatch(selectOption({ stepIndex, option }))}
            >
              <span className="icon text-7xl">{option.icon}</span>
              {answers[stepIndex] === option && <span className="label ml-2">{option.label}</span>}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Step;


