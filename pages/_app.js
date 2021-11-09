import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {

  
  return(
    <>
    <Navbar></Navbar>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
