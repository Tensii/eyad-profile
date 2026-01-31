import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  expect(screen.getByText(/Eyad Ayoub/i)).toBeInTheDocument();
  expect(screen.getByText(/SYSTEM ONLINE/i)).toBeInTheDocument();
});
