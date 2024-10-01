import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/App.css'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-SVYSF9PEGK" />

    </Layout>
  ) 
}

export default MyApp
