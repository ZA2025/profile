import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

// Mock next/link to render a single anchor with props forwarded
jest.mock('next/link', () => {
  return ({ children, href, onClick, ...props }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );
});

describe('Navbar', () => {

    it('renders the title', () => {
        render(<Navbar />);
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
    });

    it('toggles menu on burger icon click', async () => {
        render(<Navbar />);
        const menu = screen.getByRole('list');
        expect(menu.className).not.toMatch(/open/);

        const burger = screen.getByRole('button');
        await userEvent.click(burger);

        expect(menu.className).toMatch(/open/);
    });

    it('closes menu on link click', async () => {
        render(<Navbar />);
        const burger = screen.getByRole('button');
        await userEvent.click(burger); // open menu

        const homeLink = screen.getByRole('link', { name: /home/i });
        await userEvent.click(homeLink); // close menu

        const menu = screen.getByRole('list');
        await waitFor(() => {
            expect(menu.className).not.toMatch(/open/);
        });
    });
});
