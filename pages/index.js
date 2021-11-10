import Head from 'next/head'
import Image from 'next/image'
import Services from '../components/Services'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
    </div>
  )
}
