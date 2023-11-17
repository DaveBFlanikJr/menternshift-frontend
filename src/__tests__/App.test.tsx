// to test components we need to import the App.tsx / testing library
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

// Simple test to for setting up jest
test('demo', () => {
    expect(true).toBe(true);
});

// test our component
test('Renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
});
