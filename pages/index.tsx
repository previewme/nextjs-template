import Link from 'next/link';

const Home = function NextPage() {
    return (
        <main>
            <h1>Welcome to Next.JS</h1>
            <p>
                Please look at the following link for NextJS{' '}
                <a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noreferrer">
                    getting started
                </a>{' '}
                <br />
                For the second page{' '}
                <Link href="/second">
                    <a>click here</a>
                </Link>
            </p>
        </main>
    );
};

export default Home;
