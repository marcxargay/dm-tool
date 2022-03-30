import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

type props = {
  children: ReactNode
  title: string
}

const Layout = ({title, children}: props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
  </div>
)

export default Layout