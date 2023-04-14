import React from 'react'
import { NavData } from '../../data/NavData'
import { NavLink } from 'react-router-dom'
import AuthUser from '../../AuthUser'

import './LeftSide.scss'
import logo from '../../img/logo.png'

const LeftSide = () => {
  const activeLink = 'fas '
  const normalLink = 'fal '
  const { user } = AuthUser()

  return (
    <div className='leftSide'>
      <ul className='list'>
        <li className='nav-logo'>
          <img src={logo} alt={"logo"} />
        </li>
        {
          NavData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} title={item.title}>
                  {({ isActive }) => (
                    <i className={isActive ? (activeLink + item.icon) : (normalLink + item.icon)}></i>
                  )}
                </NavLink>
              </li>
            )
          })
        }
        <li>
          <NavLink to='/coridoo/parametre' title='parametres' className='parametre'>
            <img src={user.avatar} alt={user.nom} />
          </NavLink>
        </li>
      </ul>
      <div>
        <i class="far fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default LeftSide