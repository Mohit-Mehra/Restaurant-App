import React from 'react'
import { Header } from './components'

const App = () => {
  return (
    <div className='w-screen h-auto flex bg-primary flex-col'>
      <Header />
      <main className='mt-24 p-8 w-full'>Main</main>
    </div>
  )
}

export default App
