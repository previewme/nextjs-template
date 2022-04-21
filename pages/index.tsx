import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {
            uri: `This should work...`
        }
    };
};

const Home = function NextPage({ uri }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main>
            <h1>Welcome to Next.JS</h1>
            <p>Print {uri}</p>
            <p>
                Please look at the following link for NextJS{' '}
                <Link href="https://nextjs.org/docs/getting-started">
                    <a target="_blank" rel="noreferrer">
                        getting started
                    </a>
                </Link>
            </p>
        </main>
    );
};

export default Home;
