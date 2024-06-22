import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import PollForm from '../components/PollForm';
import fetchMock from 'jest-fetch-mock';

const renderWithRedux = (component: React.ReactNode) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders PollForm component', () => {
  renderWithRedux(<PollForm />);
});