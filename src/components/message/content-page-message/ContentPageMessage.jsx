import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'

const ContentPageMessage = () => {
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="comment-alt-plus" desc="Ouvrir une discussion"/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageMessage