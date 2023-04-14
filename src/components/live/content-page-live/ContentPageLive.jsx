import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'

const ContentPageLive = () => {
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="video-plus" desc="Creer une conference"/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageLive