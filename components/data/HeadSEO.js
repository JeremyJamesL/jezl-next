import Head from 'next/head';
import { useRouter } from 'next/router';
import SEO from './SEO';

function HeadSEO(props) {
  const router = useRouter();
  const url = SEO.baseURL + router.pathname;

  return (
    <Head>
        <title>{SEO.siteTitle} - {props.title}</title>
        <meta name="description" content={props.description}></meta>
        <link rel="canonical" href={url} />
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
        <link rel="manifest" href="images/site.webmanifest"/>
    </Head>
  )
}
export default HeadSEO