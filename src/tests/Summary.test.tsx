import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Summary from '../components/Summary';
import { setInitialData } from '../redux/actions/stepActions';

const renderWithRedux = (component: React.ReactNode) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

beforeAll(() => {
  store.dispatch(setInitialData());
});

test('renders Summary component', () => {
  renderWithRedux(<Summary />);
  expect(screen.getByText('Q & A')).toBeInTheDocument();
  expect(screen.getByText(/How was your week overall\?/i)).toBeInTheDocument();
  expect(screen.getByText(/How was your productivity\?/i)).toBeInTheDocument();
  expect(screen.getByText(/How was your mood\?/i)).toBeInTheDocument();
  expect(screen.getByText(/How was your work-life balance\?/i)).toBeInTheDocument();
  expect(screen.getByText(/How was your social life\?/i)).toBeInTheDocument();
});
