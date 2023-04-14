import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'

const ContentPageBibliotheque = () => {
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="books" desc="Choisir un rayon de notre bibliotheque"/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageBibliotheque