import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Products link', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Products/i);
  expect(heading).toBeInTheDocument();
});
