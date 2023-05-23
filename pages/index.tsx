import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    if (!context.req) {
        return { props: {} };
    }

    return {
        props: {
            uri: 'test'
        }
    };
};

const Home = function NextPage({ uri }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.info(JSON.stringify(uri));
    return (
        <main>
            <h1>Welcome to Next.JS</h1>
            <p>
                Please look at the following link for NextJS
                <a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noreferrer">
                    getting started
                </a>
                <br />
                For the second page
                <Link href="/second">Click Here</Link>
            </p>
            <p>This is my for test deployment</p>
        </main>
    );
};

export default Home;
