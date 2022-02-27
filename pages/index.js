import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import Section1 from '../components/Section1'
import FooterTop from '../components/FooterTop'
import Testimonials from '../components/Testimonials'
import Section2 from '../components/Section2'


export default function Home() {
  return (
    <>
      
      <Layout>
      <Section1/>
      <Section2/>
      <Testimonials/>
      <FooterTop/>
      </Layout>
      
    
    </>
  )
}
