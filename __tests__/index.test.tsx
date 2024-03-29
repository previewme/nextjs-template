import { render, screen } from '@testing-library/react';
import Home, { getServerSideProps } from '@/pages/index';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: 'Welcome to Next.JS'
        });

        expect(heading).toBeInTheDocument();
    });

    it('returns props with uri', async () => {
        const context = { req: {} };
        const { props } = await getServerSideProps(context);
        expect(props.uri).toBe('test');
    });

    it('returns empty props if req is not present', async () => {
        const context = {};
        const { props } = await getServerSideProps(context);
        expect(props).toEqual({});
    });
});