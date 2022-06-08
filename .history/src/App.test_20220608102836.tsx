import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('It renders', () => {
    render(<App/>);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
})

describe('Evaluate function', () => {

})
