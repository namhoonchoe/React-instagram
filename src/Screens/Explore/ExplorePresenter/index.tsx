import React from 'react'
import Main from './Main'



const index:React.FC = () => {
  return (
    <section className='page__container flex-col'>
      <section className='flex flex-row justify-start items-center border-green-400 border-2  w-full h-48'>
        <header>
          <p>Topic Name</p>
        </header>
      </section>
      <section className='w-full h-screen border-2 border-cyan-500 '>
        <Main/>
      </section>
    </section>
  )
}

export default index