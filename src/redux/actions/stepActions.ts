import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defining interfaces for Step, Option, StepState
export interface Option {
  icon: string;
  label: string;
}
export interface Step {
  title: string;
  options: Option[];
}

interface StepState {
  steps: Step[];
  currentStep: number;
  answers: (Option | null)[];
}

// Action creator to set initial data
export const setInitialData = () => ({
  type: 'SET_INITIAL_DATA',
  payload: {
    steps: [
      { title: 'How was your week overall?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
      { title: 'How was your productivity?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
      { title: 'How was your mood?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
      { title: 'How was your work-life balance?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
      { title: 'How was your social life?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
    ],
  }
});

// Defining StepActionTypes
export type StepActionTypes = ReturnType<typeof setInitialData>;

// Defining initialState
const initialState: StepState = {
  steps: [
    { title: 'How was your week overall?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
    { title: 'How was your productivity?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
    { title: 'How was your mood?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
    { title: 'How was your work-life balance?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] },
    { title: 'How was your social life?', options: [{ icon: '👍', label: 'Good' }, { icon: '🤔', label: 'Average' }, { icon: '👎', label: 'Bad' }] }
  ],
  currentStep: 0,
  answers: new Array(5).fill(null), // Initializing answers array with 5 null values
};

// Creating stepSlice
const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    // Reducer to set steps
    setSteps(state, action: PayloadAction<Step[]>) {
      state.steps = action.payload;
    },
    // Reducer to set current step
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    // Reducer to select option
    selectOption(state, action: PayloadAction<{ stepIndex: number; option: Option }>) {
      state.answers[action.payload.stepIndex] = action.payload.option;
    },
  },
});
export const { setSteps, setCurrentStep, selectOption } = stepSlice.actions;

export default stepSlice.reducer;
