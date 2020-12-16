import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react'
import Game from './Game';

test('renders game screen', () => {
  render(<Game />);
  const gameElement = screen.getByText(/Next player:/i);
  expect(gameElement).toBeInTheDocument();
});

test('renders winner', () => {
  const getById = queryByAttribute.bind(null, 'id');

  const dom = render(<Game />);
  fireEvent.click(getById(dom.container, 'square0'));
  fireEvent.click(getById(dom.container, 'square3'));
  fireEvent.click(getById(dom.container, 'square1'));
  fireEvent.click(getById(dom.container, 'square4'));
  fireEvent.click(getById(dom.container, 'square2'));

  const gameElement = screen.getByText(/Winner: X/i);
  expect(gameElement).toBeInTheDocument();
});
