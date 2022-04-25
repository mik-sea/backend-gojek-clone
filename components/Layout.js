import { Fragment } from 'react'

export default function Layout(props) {
  return (
    <Fragment>
      <main className='flex flex-col items-center mt-32 mx-96'>
        <div className='text-center space-y-4'>
          <h1 className='text-5xl'>
            <span>Welcome to </span>
            <span className='capitalize font-semibold text-[#00a770]'>
              {props.page}
            </span>
            {!props.skips && <span>! but not the real one.</span>}
          </h1>

          <p className='text-xl'>
            <span>{props.description}</span>
          </p>
        </div>
        {props.children}
      </main>
    </Fragment>
  )
}
