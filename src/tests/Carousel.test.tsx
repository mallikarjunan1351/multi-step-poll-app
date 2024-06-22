import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Carousel from '../components/Carousel';
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

test('renders Carousel component', () => {
  renderWithRedux(<Carousel />);
  const elements = screen.getAllByText(/How was your week overall\?/i);
  expect(elements.length).toBeGreaterThan(0);
});

test('clicks next arrow in Carousel component', () => {
  renderWithRedux(<Carousel />);
  const nextArrow = screen.getByLabelText('chevron-down');
  fireEvent.click(nextArrow);
//   const activeItem = screen.getByText(/How was your productivity\?/i);
//   expect(activeItem).toBeInTheDocument();
});

test('clicks previous arrow in Carousel component', () => {
  renderWithRedux(<Carousel />);
  const nextArrow = screen.getByLabelText('chevron-down');
  fireEvent.click(nextArrow);
  const prevArrow = screen.getByLabelText('chevron-up');
  fireEvent.click(prevArrow);
//   const activeItem = screen.getByText(/How was your week overall\?/i);
//   expect(activeItem).toBeInTheDocument();
});

test('clicks dot to navigate Carousel component', () => {
  renderWithRedux(<Carousel />);
  const dot = screen.getAllByRole('button')[2]; // Assuming the dot buttons have the same role
  fireEvent.click(dot);
//   const activeItem = screen.getByText(/How was your mood\?/i);
//   expect(activeItem).toBeInTheDocument();
});
