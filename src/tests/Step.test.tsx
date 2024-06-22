import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Step from '../components/Step';
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

test('renders Step component', () => {
  renderWithRedux(<Step stepIndex={0} />);
  expect(screen.getByLabelText('Good')).toBeInTheDocument();
  expect(screen.getByLabelText('Average')).toBeInTheDocument();
  expect(screen.getByLabelText('Bad')).toBeInTheDocument();
});

test('selects an option in Step component', () => {
  renderWithRedux(<Step stepIndex={0} />);
  const goodOption = screen.getByLabelText('Good');
  fireEvent.click(goodOption);
  expect(goodOption).toHaveClass('selected');
});
