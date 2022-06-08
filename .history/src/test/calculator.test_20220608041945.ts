import Calculator from '../pages/Calculator';
import {render, screen, cleanup} from '@testing-library/react';

test("testing render of calculator...", () => {
    render(<Calculator/>);
})