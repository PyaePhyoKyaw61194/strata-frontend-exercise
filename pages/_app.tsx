import Navbar from '../components/partials/navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 20000,
        cacheTime: 10000
      },
    },
  }))
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className='bg-white min-h-screen'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>)
}

export default MyApp
