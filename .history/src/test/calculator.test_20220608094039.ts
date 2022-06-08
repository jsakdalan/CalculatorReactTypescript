import App from './App';
import {render, screen, cleanup} from '@testing-library/react';

test('testing render of calculator...', () => {
    render(<App/>)
});