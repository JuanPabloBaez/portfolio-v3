import ReactPlayer from 'react-player';
import Head from 'next/head';

function Video() {
  return (
    <>
    <Head>
        <title>JP Baez portfolio | Web Development &#38; Video Production </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico?" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> 
        <meta
            name="description"
            content="Portfolio Juan Pablo Baez. Web Development and Video Production. Based in Berlin, Germany."
        />
        <meta property="og:url" content="http://jpbaez.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Juan Pablo Baez - Portfolio"/>
        <meta property="og:description" content="Personal portfolio of Juan Pablo Baez, frontend web developer (Javascript, React) and video producer."/>
        <meta property="og:image" content="/metaLogo.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="http://jpbaez.com/"/>
        <meta property="twitter:url" content="http://jpbaez.com/"/>
        <meta name="twitter:title" content="Juan Pablo Baez - Portfolio"/>
        <meta name="twitter:description" content="Personal portfolio of Juan Pablo Baez, frontend web developer (Javascript, React) and video producer."/>
        <meta name="twitter:image" content="/metaLogo.jpg"/>
    </Head>
    <div className="video-body">
        <p>The complete work is available on  <a href="http://beatkino.com/" target="_blank"  rel="noreferrer">beatkino.com</a></p>
        <ReactPlayer 
        className="page-video"
        url="https://vimeo.com/585754763"
        controls={true}
        responsive="true"
        width={"100%"}
        /> 
      </div>
    </>
  )
}

export default Video