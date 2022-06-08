import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    test('It renders', () => {
        render(<App/>);
    });
})