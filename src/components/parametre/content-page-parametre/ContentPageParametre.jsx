import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'

const ContentPageParametre = () => {
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="user-cog" desc="Configurer vos parametre d'utilisateur"/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageParametre