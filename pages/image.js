import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Imagen from 'next/future/image';
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
  const res = await client.getEntries({content_type:'gallery'})
  const image = res.items
  return {
    props:{
      image
    }
  }
}

function Image({image}) {
   const [selector, setSelector] = useState("collage")
   const [galleryItem, setGalleryItem] = useState([])

  useEffect(()=>{
    function selectImages (){
      return Object.values(image).map(item => item.fields.title === selector ? setGalleryItem(item.fields.images):null )
    }
    selectImages();
   },[selector, image])

  function handleGallery () {
    selector ==="collage" ? setSelector("photos") : setSelector("collage")
  }

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

    <div className="gallery-body" >
      <button onClick={handleGallery} >{selector==="collage" ? <p><b>Collage</b> / Photography</p>: <p>Collage / <b>Photography</b> </p>}</button>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        navigation
        loop={true}
      >
        {galleryItem.map((item,index)=>{
          let source = `https:${item.fields.file.url}` ;
          return(
            <SwiperSlide key={index}>
              <Imagen className="slide-photo" src={source}  alt={`gallery ${item}`} draggable={false}  />
            </SwiperSlide>
          )
          
        })}
      </Swiper>
    </div>
    </>
  )
}

export default Image