// pages/_app.js
import { Box } from '@material-ui/core'
import { ApolloProvider } from '@apollo/client'
import client from 'src/ulti/apollo-client'
import { Footer, Header } from 'src/components'
import { DefaultSeo } from 'next-seo';
import './index.css'

import SEO from '../../next-seo';
function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...SEO}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
