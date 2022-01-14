import type { AppProps } from 'next/app';

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
};

export default MyApp;
