import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './ContentPage.scss'
import ContentPageProject from '../projet/content-page-project/ContentPageProject'
import ContentPageMessage from '../message/content-page-message/ContentPageMessage'
import ContentPageBibliotheque from '../bibliotheque/content-page-bibliotheque/ContentPageBibliotheque'
import ContentPageLive from '../live/content-page-live/ContentPageLive'
import ContentPageNotification from '../notification/content-page-notification/ContentPageNotification'
import ContentPageParametre from '../parametre/content-page-parametre/ContentPageParametre'
import ProjectForm from '../projet/project-form/ProjectForm'

const ContentPage = () => {
  return (
    <div className='content-page'>
      <Routes>
        <Route path='/projet/*' element={<ContentPageProject />} />
        <Route path='/message' element={<ContentPageMessage />} />
        <Route path='/bibliotheque' element={<ContentPageBibliotheque />} />
        <Route path='/live' element={<ContentPageLive />} />
        <Route path='/notification' element={<ContentPageNotification />} />
        <Route path='/parametre' element={<ContentPageParametre />} />
      </Routes>
    </div>
  )
}

export default ContentPage