import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function FirstPost() {

  useEffect(() => {
    return () => {
      console.log('in function component will unmount')
    };
  }, [])

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>
        <Link
          href={`/page2`}
          as={`/page2?orderId=20`}
          shallow
        >
          <a>Go to page2</a>
        </Link>
      </p>
    </Layout>
  )
}