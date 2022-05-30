import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimeList, AnimeDetail, CollectionList, CollectionDetail } from '../pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
      <Route path="/collections" element={<CollectionList />} />
      <Route path="/collections/:name" element={<CollectionDetail />} />
    </Routes>
  )
}