import { render, screen } from '@testing-library/react';
import App from './App';
import Display from './Components/Display/Display.components';

test('renders Blackjack', () => {
	render(<App />);
	const linkElement = screen.getByText(/Blackjack/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
	render(<App />);
	expect(<Display />).toBeInTheDocument();
});
