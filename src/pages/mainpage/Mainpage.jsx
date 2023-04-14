import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Navigate } from 'react-router-dom'
import AuthUser from '../../AuthUser'
import ContentPage from '../../components/content-page/ContentPage'
import './Mainpage.scss'

const Mainpage = () => {
  const { getToken } = AuthUser()
  if(!getToken()) {
    return (<Navigate to='/' replace/>)
  }
  return (
    <div className='main-page'>
      <Sidebar />
      <ContentPage />
    </div>
  )
}

export default Mainpage