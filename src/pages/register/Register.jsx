import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../../AuthUser'
import './Register.scss'
import logo from '../../img/Coridoo white.png'
import rocket from '../../img/rocket-dynamic-color.png'
import notebook from '../../img/notebook-dynamic-color.png'
import './Register.scss'

const Register = () => {
  const { http, setToken } = AuthUser()
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [matricule, setMatricule] = useState('')
  const [niveau, setNiveau] = useState('')
  const [mention, setMention] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passworConfirmation, setPasswordConfirmation] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const bio = niveau + ' ' + mention
    http.post('/register', { nom: nom, prenom: prenom, matricule: matricule, bio: bio, email: email, password: password, password_confirmation: passworConfirmation })
      .then((res) => {
        setToken(res.data.data.user, res.data.data.token)
      })
  }
  return (
    <div className='register-page'>
      <div className='register-left'>
        <img src={notebook} alt="notebook" />
      </div>
      <div className='register-right'>
        <div className="register-right-content">
          <div className="register-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="title">
            <h1>Créez un compte étudiant</h1>
            <p>Connectez-vous pour utiliser l'application</p>
          </div>
          <form>
            <div className="form-groups">
              <div className="form-group">
                <input type="text" name='nom' onChange={e => setNom(e.target.value)} placeholder='Entrez votre nom' />
                <label htmlFor="nom">Nom</label>
              </div>
              <div className="form-group">
                <input type="text" name='prenom' onChange={e => setPrenom(e.target.value)} placeholder='Entrez votre prénom' />
                <label htmlFor="prenom">Prénom</label>
              </div>
            </div>
            <div className="form-groups">
              <div className="form-group">
                <input type="text" name='matricule' onChange={e => setMatricule(e.target.value)} placeholder='Entrez votre matricule' />
                <label htmlFor="matricule">Matricule</label>
              </div>
              <div className="form-group">
                <select type="text" name='niveau' onChange={e => setNiveau(e.target.value)} >
                  <option value="">Selectionnez niveau</option>
                  <option value="L1">Licence 1</option>
                  <option value="L2">Licence 2</option>
                  <option value="L3">Licence 3</option>
                  <option value="M1">Master 1</option>
                  <option value="M2">Master 2</option>
                </select>
                <label htmlFor="niveau">Niveau</label>
              </div>
              <div className="form-group">
                <select type="text" name='mention' onChange={e => setMention(e.target.value)} >
                  <option value="">Selectionnez mention</option>
                  <option value="DAII">DAII</option>
                  <option value="RPM">RPM</option>
                  <option value="AES">AES</option>
                </select>
                <label htmlFor="mention">Mention</label>
              </div>
            </div>
            <div className="form-group">
              <input type="text" name='email' onChange={e => setEmail(e.target.value)} placeholder='Entrez votre email' />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-groups">
              <div className="form-group">
                <input type="password" name='password' onChange={e => setPassword(e.target.value)} placeholder='Entrez votre mot de passe' />
                <label htmlFor="password">Mot de passe</label>
              </div>
              <div className="form-group">
                <input type="password" name='password_confirmation' onChange={e => setPasswordConfirmation(e.target.value)} placeholder='Confirmez votre mot de passe' />
                <label htmlFor="password_confirmation">Confirmer mot de passe</label>
              </div>
            </div>
            <button className='btn-Submit' type='submit' onClick={submitForm}>Enregister</button>
            <div className="links">
              <NavLink to='/register-ens' className='lien'>Créer un compte enseignant</NavLink>
              <NavLink to='/' className='lien'>Se connecter</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register