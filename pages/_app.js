import Overlay from '../src/components/UI/Overlay'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Overlay>
      <Component {...pageProps} />
    </Overlay>
  )
}

export default MyApp
