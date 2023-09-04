import Head from 'next/head';
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Updates from '@/components/Updates/Updates'
import Footer from '@/components/Footer/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Projects/>
      <Updates/>
      <Footer/>
    </main>
  )
}
