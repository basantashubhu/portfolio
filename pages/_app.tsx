import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/footer'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <div className='text-slate-700 flex flex-col gap-6'>
          <Header/>
            <Component {...pageProps} />
          <Footer/>
        </div>
      </Layout>
  )
}
export default MyApp
