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

function Image(image) {
  
  return (
    <h1>Image</h1>
  )
}

export default Image