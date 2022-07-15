import Head from 'next/head';

function Web() {
  return (
  <>
    <Head>
        <title>JP Baez portfolio | Web Development &#38; Video Production </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        <link rel="icon" href="../public/favicon.ico?" type="image/x-icon" />
        <link rel="shortcut icon" href="../public/favicon.ico?" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" /> 
        <meta
            name="description"
            content="Portfolio Juan Pablo Baez. Web Development and Video Production. Based in Berlin, Germany."
        />
        <meta property="og:url" content="http://jpbaez.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Juan Pablo Baez - Portfolio"/>
        <meta property="og:description" content="Personal portfolio of Juan Pablo Baez, frontend web developer (Javascript, React) and video producer."/>
        <meta property="og:image" content="../public/metaLogo.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="http://jpbaez.com/"/>
        <meta property="twitter:url" content="http://jpbaez.com/"/>
        <meta name="twitter:title" content="Juan Pablo Baez - Portfolio"/>
        <meta name="twitter:description" content="Personal portfolio of Juan Pablo Baez, frontend web developer (Javascript, React) and video producer."/>
        <meta name="twitter:image" content="../public//metaLogo.jpg"/>
    </Head>
    <div className="web-body">    
      <span><p className="web-title">jpbaez.com</p> / <b>tech stack:</b> React, SaSS, Contentful(CMS)</span>
      <span><a href="http://beatkino.com/" target="_blank"  rel="noreferrer">beatkino.com</a>  (film stream platform) / <b>tech stack:</b> React, Redux, SaSS, Node.js, MongoDB</span>
      <span><a href="https://carloslertora.cl" target="_blank"  rel="noreferrer">carloslertora.cl</a>  (personal portfolio) / <b>tech stack:</b> React, CSS, Contentful (CMS)</span>
      <span><a href="https://www.alejandroarevalo.cl/" target="_blank"  rel="noreferrer">alejandroarevalo.cl</a>  (personal portfolio) / <b>tech stack:</b> React, Recoil, SaSS, Contentful (CMS)</span>
    </div>
  </>
  )
}

export default Web