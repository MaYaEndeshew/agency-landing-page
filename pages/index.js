import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import home from "./Home"
// import { Inter } from '@next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout pageTitle="Agency Landing Page using Nextjs">
    <home/>
    </Layout>
  )
}
