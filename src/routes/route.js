import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimeList } from '../pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimeList />} />
    </Routes>
  )
}