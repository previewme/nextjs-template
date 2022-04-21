import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home data={{ uri: '' }} />);

        const heading = screen.getByRole('heading', {
            name: 'Welcome to Next.JS'
        });

        expect(heading).toBeInTheDocument();
    });
});
