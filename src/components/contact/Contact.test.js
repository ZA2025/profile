import { render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
    // Todo: component renders the title
    it('renders the title', () => {
        render(<Contact />);
        expect(screen.getByText('Contact Me')).toBeInTheDocument();
    })

    // Todo: component renders name, email, and message Field
    it('renders name, email, and message Field', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    })

    // Todo: renders button
    it('renders button', () => {
        render(<Contact />);
        expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    })
})