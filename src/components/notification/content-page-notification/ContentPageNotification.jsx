import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'

const ContentPageNotification = () => {
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="bell" desc="Ouvrir une notification de groupe"/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageNotification