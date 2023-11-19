import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MyNav from '../components/Navbar';

test('Renders the navbar component', () => {
    render(<MyNav />);
    expect(true).toBeTruthy();
});
