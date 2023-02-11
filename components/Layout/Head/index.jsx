import Head from 'next/head';

const CustomHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link 
      href="https://cdn.jsdelivr.net/npm/@mdi/font@7.1.96/css/materialdesignicons.min.css" 
      rel="stylesheet" 
    />
    
    {/* <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    /> */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </Head>
);

export default CustomHead;
