import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './App';

test('Multi step poll application renders successfully', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const questions = screen.getAllByText(/How was your week overall?/i);
  // Assuming you're interested in the first occurrence
  expect(questions[0]).toBeInTheDocument();
});
