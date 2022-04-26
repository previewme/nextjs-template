import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    if (!context.req) {
        return { props: {} };
    }
    return {
        props: {
            test: 'test'
        }
    };
};

const Home = function NextPage({ test }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.info(JSON.stringify(test));

    return (
        <main>
            <h1>Welcome to Next.JS</h1>
            <p>
                Please look at the following link for NextJS{' '}
                <Link href="https://nextjs.org/docs/getting-started" passHref>
                    <a target="_blank" rel="noreferrer">
                        getting started
                    </a>
                </Link>
            </p>
        </main>
    );
};

export default Home;
