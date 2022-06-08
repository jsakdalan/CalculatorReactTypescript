import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './pages/Calculator';
import evaluateValue from './pages/Calculator'

describe('App component', () => {
  test('It renders', () => {
    render(<Calculator/>);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
})

// describe('Evaluate function', () => {
//   test('Evaluated', () => {
    
//   })
// })
