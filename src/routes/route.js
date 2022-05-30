import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimeList, AnimeDetail } from '../pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
    </Routes>
  )
}