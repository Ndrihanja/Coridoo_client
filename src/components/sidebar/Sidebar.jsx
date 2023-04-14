import React from 'react'
import './Sidebar.scss'
import LeftSide from '../left-side/LeftSide'
import RightSide from '../right-side/RightSide'
import { BrowserRouter } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <LeftSide/>
      
      <RightSide/>
    </div>
  )
}

export default Sidebar