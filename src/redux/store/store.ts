import { configureStore } from '@reduxjs/toolkit';
import stepReducer from '../reducers/stepReducer';

// Configuring store
const store = configureStore({
  reducer: {
    steps: stepReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
