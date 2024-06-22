import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import Step from './Step';
import Summary from './Summary';
import { Button, message  } from 'antd';
import { submitData } from '../api/mockApi';
import { AppState } from '../redux/store/store';
import { Option } from '../redux/actions/stepActions';
import '../styles/PollForm.css';

/**
 * PollForm component
 * - Renders the PollForm layout
 * - Displays Carousel and Step components
 * - Handles form submission
 * @returns
 */
const PollForm: React.FC = () => {
  // Get current step, steps, and answers from Redux store
  const { currentStep, steps, answers } = useSelector((state: AppState) => state.steps);
  // State to enable/disable submit button
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  // Custom message hook
  const [messageApi, contextHolder] = message.useMessage();
  // Key for updatable message
  const key = 'updatable';

  // Update submit button state on answers change
  useEffect(() => {
    setIsSubmitEnabled(answers.every(answer => answer !== null));
  }, [answers]);

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitEnabled(false);
    const nonNullAnswers = answers.filter(answer => answer !== null) as Option[];
    // Submit data and show message
    const result = await submitData(nonNullAnswers);
    // Show message based on API response
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    if (result.success) {
      // Show success message
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: 'Data Submitted Successfully!',
          duration: 2,
        });
      }, 100);
      setIsSubmitEnabled(answers.every(answer => answer !== null));
    }else{
      // Show error message
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'error',
          content: 'Data Submission Failed!',
          duration: 2,
        });
      }, 100 );
      setIsSubmitEnabled(answers.every(answer => answer !== null));
    }
  };

  return (
    <div className="poll-form">
      {contextHolder}
      <div className="left-pane">
        <Carousel />
      </div>
      <div className="right-pane">
        {currentStep < steps.length ? (
          <Step stepIndex={currentStep} />
        ) : (
          <div className="flex flex-col items-center">
            <Summary />
            <Button 
              role='submit-button'
              type="primary" 
              onClick={handleSubmit} 
              className="mt-4" 
              disabled={!isSubmitEnabled}
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PollForm;
