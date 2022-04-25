import Head from 'next/head'

import { MongoClient } from 'mongodb'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import { Fragment } from 'react'

export default function GoFood(props) {
  const router = useRouter()

  function redirect(restaurant) {
    router.push(`/go-food/${restaurant}`)
  }

  return (
    <Fragment>
      <Head>
        <title>GoFood - GoWhatever</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout
        skips={false}
        page={'go food'}
        description={
          'Eat simply by purchasing without needing to purchase it straight from the restaurant to eat.'
        }
      >
        <div className='grid grid-cols-4 my-12'>
          {props.restaurants.map((item) => (
            <div
              className='cursor-pointer rounded-md border border-[#eaeaea] hover:border-[#0070f3] hover:text-[#0070f3] transition ease-in-out duration-200 p-4 m-4'
              key={item.id}
              onClick={() => redirect(item.name)}
            >
              <h2 className='capitalize font-semibold text-xl'>
                {item.name} Restaurant
              </h2>
            </div>
          ))}
        </div>
      </Layout>
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://adminclone:adminclone@cluster0.cr4db.mongodb.net/db_gojek?retryWrites=true&w=majority'
  )
  const db = client.db()
  const collections = db.collection('go_food')
  const restaurants = await collections.find().toArray()
  client.close()

  return {
    props: {
      restaurants: restaurants.map((item) => ({
        id: item._id.toString(),
        name: item.restaurant,
      })),
    },
    revalidate: 1,
  }
}
