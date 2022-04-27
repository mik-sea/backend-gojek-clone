import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Go Whatever</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout
        page={'go-whatever'}
        description={
          'You can drive and travel wherever and whenever you desire, and eat anything you want without leaving your house!'
        }
      ></Layout>
    </Fragment>
  )
}
