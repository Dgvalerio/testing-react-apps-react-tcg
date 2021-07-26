import React from 'react';

import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

test('renders Hello Word as a text', () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  const helloWordElement = screen.getByText('Hello Word!');
  expect(helloWordElement).toBeInTheDocument();
});
