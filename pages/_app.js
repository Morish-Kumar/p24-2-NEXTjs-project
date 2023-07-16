import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
    </Layout>
)}

export default MyApp


// adding Layout component helps us to make the same styling defined inside the Layout component render on every pages 