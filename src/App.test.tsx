import React from 'react';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import App from './App';

test('renders learn react link', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
