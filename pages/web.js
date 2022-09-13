import Head from 'next/head';

export async function getStaticProps(){
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
  const res = await client.getEntries({content_type:'web'})
  const pages = res.items[0].fields.website
  
  return {
    props:{
      pages
    }
  }
}

function Web({pages}) {

  return (
  <>
    <Head>
        <title>JP Baez portfolio | Web Development &#38; Video Production </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        <link rel="icon" href="/favicon.ico?" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" /> 
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
    <div className="web-body">
      {
        pages.map((item,index)=>{

          return(
            <span key={index}>
              {item.link===""? <p className="web-title">{item.title}</p> : <a href={item.link} target="_blank"  rel="noreferrer">{item.title}</a> }
              {item.description==="" ? null : <> ({item.description})</> }
             <b>   /tech stack:</b> {item.stack}
            </span>
          )
        
        })
      }    
    </div>
  </>
  )
}

export default Web