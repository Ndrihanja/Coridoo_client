import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RightSideBibliotheque from '../right-side-components/right-side-bibliotheque/RightSideBibliotheque'
import RightSideMessage from '../right-side-components/right-side-message/RightSideMessage'
import RightSideProject from '../right-side-components/right-side-projet/RightSideProjet'
import RightSideLive from '../right-side-components/right-side-live/RightSideLive'
import RightSideNotification from '../right-side-components/right-side-notification/RightSideNotification'
import RightSideParametre from '../right-side-components/right-side-parametre/RightSideParametre'

import './RightSide.scss'

const RightSide = () => {
  return (
    <div className='rightSide'>
      <Routes>
        <Route path='/bibliotheque/*' element={<RightSideBibliotheque/>}/>
        <Route path='/message/*' element={<RightSideMessage/>}/>
        <Route path='/projet/*' element={<RightSideProject/>}/>
        <Route path='/live/*' element={<RightSideLive/>}/>
        <Route path='/notification/*' element={<RightSideNotification/>}/>
        <Route path='/parametre/*' element={<RightSideParametre/>}/>
      </Routes>
    </div>
  )
}

export default RightSide