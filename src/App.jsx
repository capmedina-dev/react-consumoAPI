import React from 'react'
import { Header } from './components/layouts/Header'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
      

    </>
  )
}
