import React, {useState, useEffect} from 'react';
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
   },[selector])


  function handleGallery () {
    selector ==="collage" ? setSelector("photos") : setSelector("collage")
  }


  return (
    <div className="gallery-body" >
      <button onClick={handleGallery} >{selector==="collage" ? <p><b>Collage</b> / Photography</p>: <p>Collage / <b>Photography</b> </p>}</button>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        
      >
        {galleryItem.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              <img className="slide-photo" src={item.fields.file.url}  alt={`gallery ${item}`} draggable={false}  />
            </SwiperSlide>
          )
        })}
        
       
        
      </Swiper>
    


    </div>
  )
}

export default Image