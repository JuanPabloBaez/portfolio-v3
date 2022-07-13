

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

export default function Board(posts) {
 
  return (
    <h1>Board!</h1>
  )
}

