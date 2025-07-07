import { render, screen, waitFor } from '@testing-library/react';
import Stack from './Stack';

describe('Stack', () => {

    it('render the title', () => {
        render(<Stack />);
        expect(screen.getByText('Stack')).toBeInTheDocument();
    })

    it('includes key stack technologies', () => {
        render(<Stack />);
        expect(screen.getByText(/HTML/i)).toBeInTheDocument();
        expect(screen.getByText(/NEXT.JS/i)).toBeInTheDocument();
        expect(screen.getByText(/Web Accessibility/i)).toBeInTheDocument();
    });

    it('renders profile image with correct alt text', () => {
        render(<Stack />);
        const img = screen.getByAltText(/profile image/i);
        expect(img).toBeInTheDocument();
    });

    it('Image exists', () => {
        render(<Stack />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    })
})