import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './App';

describe('App component', () => {
    test('It renders', () => {
        render(<Hello/>);

        expect(screen.getByText('')).toBeInTheDocument();
    });
})
