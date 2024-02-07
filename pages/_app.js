import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

export const metadata = {
  title: 'Full Stack Developer | Muhammad Owais',
  description: 'Hi, I am a full-stack developer 🧑‍💻 with solid experience in creating user-friendly, upstanding, secure, and fast websites for businesses around the world.',
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE // Google Search Console Verification
  },
  alternates: {
    canonical: "https://mohammadowaiscv.vercel.app",
  },
  icons: {
    other: [
      {
        rel: 'preconnect',
        url: 'mohammadowaiscv.vercel.app',
      },
    ],
  },
};

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
