import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/pages/Home' 
import { Gifts } from '../components/pages/Gifts'
import { RickAndMorty } from '../components/pages/RickAndMorty' 
import { NotFound } from '../components/pages/NotFound'
import { Cats } from '../components/pages/Cats'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gifts' element={<Gifts />} />
            <Route path='/rickandmorty' element={<RickAndMorty />} />
            <Route path='/cats' element={<Cats />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}
