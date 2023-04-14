import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RightSideData } from '../../../data/RightSideData'
import SubProjectNav from './sub-project-nav/SubProjectNav'
import api from '../../../api'
import AuthUser from '../../../AuthUser'

import './RightSideProjet.scss'

const RightSideProjet = () => {
  const { http } = api()
  const { user } = AuthUser()
  const [projets, setProjets] = useState({})

  useEffect(() => {
    const fetchProjet = async () => {
      try {
        const response = await http.get('/projet', { params: {user_id: user.id} })
        setProjets(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    const timer = setTimeout(() => {
      fetchProjet()
    }, 700)
    return () => clearTimeout(timer)
    // fetchProjet()
  }, [http, user])

  return (
    <div className='rightSideProject'>
      <div className='project-menu'>
        <div className="form-search">
          <i className="fal fa-search"></i>
          <input type="text" name="search" id="search" placeholder='Recherche...' autoComplete='off' />
        </div>
        <div className='project-menu-list'>
          {
            RightSideData.map((item, index) => {
              return (
                <SubProjectNav item={item} projets={projets} key={index} />
              )
            })
          }
        </div>
      </div>
      <div className='project-add'>
        <NavLink to='creation-projet' className="btn-Add"><i className="text-small fal fa-plus"></i> Nouveau Projet</NavLink>
      </div>
    </div>
  )
}

export default RightSideProjet