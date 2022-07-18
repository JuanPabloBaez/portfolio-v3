import Head from 'next/head';
import Image from 'next/future/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
SwiperCore.use([Navigation]);


export async function getStaticProps(){
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
  const res = await client.getEntries({content_type:'post'})
  const posts = res.items
  return {
    props:{
      posts
    }
  }
}

export default function Board({posts}) {
 
  

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
    <div className="board-body">
        <h1>Board</h1>
        {posts.map((post, index)=> {
            let{ header,
                mainPicture,
                date,
                place,
                placeLink,
                mainContent1,
                mainContent2,
                videoLink,
                media} = post.fields
               
            return(
                <div className="post-container" key={index}>
                    <h2>{header}</h2>
                    <span>
                        <p className="post-date">{date} </p>
                        {(function() {
                            if ( place && placeLink  ) {
                                return <a className="post-place" href={placeLink} target="_blank" rel="noreferrer">on {place} </a>;  
                            } if (place ==="") {
                                return null
                            } else {
                                return <p className="post-place"> {place}</p>;
                            }
                        })()}
                    </span>
                    <div className="post-main-text">
                        {mainPicture && <Image className='main-photo' src={`https:${mainPicture.fields.file.url}`} alt={header}/>}
                        <div className='post-main-content'>{documentToReactComponents(mainContent1)}</div>
                    </div>
                    {media && media.length ===1 ? <Image className="board-photo" src={`https:${post.fields.media[0].fields.file.url}`}  alt="post related"  />:null}
                    {media && media.length > 1 ? <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        height="100%"
                        navigation
                        loop={true}
                    >
                    { media.map((photo, index )=> {
                        return (
                            <SwiperSlide key={index}>
                                <Image className="board-photo" src={`https:${photo.fields.file.url}`}  alt="post related"  />
                            </SwiperSlide>
                        )
                    })}  
                    </Swiper>
                    :null} 
                    {mainContent2 ?  <div className='post-main-content2'>{documentToReactComponents(mainContent2)}</div> 
                    : null}
                    {videoLink && <ReactPlayer url={videoLink} className="board-player" width="100%" />}
                    <hr></hr>
                </div>
            )
        })}
    </div>
    </>
  )
}

