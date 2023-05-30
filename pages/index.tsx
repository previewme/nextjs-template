import Link from 'next/link';
import Head from 'next/head';
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
    const imgURL =
        'https://res.cloudinary.com/innovation-capital/video/upload/s--oTlBL3sV--/' +
        'du_5.0,eo_1.859,fl_lossy,q_50,so_0.0/l_PreviewMe:Other:' +
        'majxzwm8mcdoevwhh1wz/e_loop/PreviewMe/Test/rhrryv2itv1bzdaodhwe.gif';
    return (
        <main>
            <Head>
                <meta property="og:image" content={imgURL} />
                <meta property="og:url" content="https://development.previewme.com/nextjs-template" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="NextJS Template" />
                <meta property="og:description" content="This is sample" />
                <title>Welcome</title>
            </Head>
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
