import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../../../AuthUser'
import './RightSideParametre.scss'

const RightSideParametre = () => {
  const { token, logout, user } = AuthUser()  
  const logoutUser = () => {
    if (token != undefined) {
      logout()
    }
  }

  console.log(user.matricule)

  return (
    <div className='rightSideParametre'>
      <ul className='parametres'>
        <li className='profile-view'>
          <img src={user.avatar} alt={user.nom} />
          <div className="user-details">
            <h3>{user.nom + ' ' + user.prenom}</h3>
            <span>
              {
                user.matricule.includes('PE')
                ? 'Enseignant, '
                : 'Etudiant, '
              }
              {user.bio}
            </span>
          </div>

        </li>
        <li>
          <NavLink><i className="fal fa-user-edit"></i>Modifier le profil</NavLink>
        </li>
        <li>
          <NavLink><i className="fal fa-lock-alt"></i>Securite & Confidentialite</NavLink>
        </li>
        <li>
          <NavLink><i className="fal fa-question-circle"></i>Aide & assistance</NavLink>
        </li>
        <li>
          <NavLink><i className="fal fa-comment-alt-exclamation"></i>Donner votre avis</NavLink>
        </li>
      </ul>
      <div>
        <button className='btn-Danger' onClick={logoutUser}><i class="fal fa-sign-out"></i> Déconnexion</button>
      </div>
    </div>
  )
}

export default RightSideParametre