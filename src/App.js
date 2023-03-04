import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, Header, MainContainer } from './components'
import { AnimatePresence } from 'framer-motion'


const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className='w-screen h-auto flex bg-primary flex-col'>
      <Header />
      <main className='mt-24 p-8 w-full'>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
