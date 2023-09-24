import '../sass/main.scss';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { Fragment } from 'react';

function App({ Component, pageProps}) {
    return (
        <Fragment>
            <Head></Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    )
}

export default App;