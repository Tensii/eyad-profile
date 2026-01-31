import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Vercel Analytics
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}));

test('renders portfolio header', () => {
  render(<App />);
  expect(screen.getByText(/Eyad Ayoub/i)).toBeInTheDocument();
  expect(screen.getByText(/SYSTEM ONLINE/i)).toBeInTheDocument();
});
