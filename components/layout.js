import Head from "next/head";

const Layout = ({ children, title = "SLR Magic" }) =>
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/index.css" rel="stylesheet" />
    </Head>

    <main id="main">
      {children}
    </main>
  </div>;

export default Layout;
