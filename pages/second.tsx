import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

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

const SecondPage = function NextPage({ uri }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.info(JSON.stringify(uri));
    return (
        <main>
            <h1>Second Page</h1>
            <p>
                This is the second page{' '}
                <Link href="/">
                    <a>click here to back home</a>
                </Link>
            </p>
        </main>
    );
};

export default SecondPage;
