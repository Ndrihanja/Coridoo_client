import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmptyView from '../../empty-view/EmptyView'
import ProjectForm from '../project-form/ProjectForm'
import  ViewProjectArchive  from '../view-project-archive/ViewProjectArchive'
import ViewProject from '../view-project/ViewProject'

const ContentPageProject = () => { 
  return (
    <div className='content-page-view'>
      <Routes>
        <Route path='/' element={<EmptyView icon="layer-group" desc="Ouvrir un projet"/>}/>
        <Route path='/creation-projet' element={<ProjectForm />}/>
        <Route path='/edition-projet' element={<ProjectForm />}/>
        <Route path='/:projetId/*' element={<ViewProject/>}/>
        <Route path='/archive/:projetId/*' element={<ViewProjectArchive/>}/>
      </Routes>
    </div>
  )
}

export default ContentPageProject