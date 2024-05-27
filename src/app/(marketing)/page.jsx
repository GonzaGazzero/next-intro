import TitlePage from '@/components/TitlePage'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return <>
    <TitlePage title='Home' />
    {/* <a href="/blog">Blog</a> ineficiente*/} 
    <Link href='/blog'>Blog</Link> {/* hace navegacion desde el cliente evitando la peticion al servidor */}
  </>
}

export default Home
