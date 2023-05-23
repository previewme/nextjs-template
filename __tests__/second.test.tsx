import { render, screen } from '@testing-library/react';
import Second , { getServerSideProps } from '@/pages/second';

describe('Second Page', () => {
    it('renders a heading', () => {
        render(<Second />);

        const heading = screen.getByRole('heading', {
            name: 'Second Page'
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