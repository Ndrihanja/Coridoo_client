import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../../AuthUser'
import './Login.scss'
import logo from '../../img/Coridoo white.png'
import rocket from '../../img/rocket-dynamic-color.png'
// import notebook from '../../img/notebook-dynamic-color.png'

const Login = () => {
  const { http, setToken } = AuthUser()
  // const [errors, setErrors] = useState("")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitForm = (e) => {
    e.preventDefault()

    http.post('/login', { email: email, password: password })
      .then((res) => {
        setToken(res.data.data.user, res.data.data.token)
      })
  }

  return (
    <div className='login-page'>
      <div className='login-left'>
        <div className="login-left-content">
          <div className="login-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="title">
            <h1>Content de vous revoir !</h1>
            <p>Connectez-vous pour utiliser l'application</p>
          </div>
          <form>
            <div className="form-group">
              <input type="text" name='email' placeholder='Entrez votre matricule ou email' onChange={e => setEmail(e.target.value)} />
              <label htmlFor="email">Matricule ou Email</label>
            </div>
            <div className="form-group">
              <input type="password" name='password' placeholder='Entrez votre mot de passe' onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Mot de passe</label>
            </div>
            <button className='btn-Submit' type='submit' onClick={e => submitForm(e)}>Se connecter</button>
            <div className="links">
              <span className="lien">
                <NavLink to='register' className='lien'>Créer un compte étudiant&nbsp;</NavLink>
                /
                <NavLink to='register-ens' className='lien'>&nbsp;enseignant</NavLink>
              </span>
              <span className='lien'>Mot de passe oublié ?</span>
            </div>
          </form>
        </div>
      </div>
      <div className='login-right'>
        <img src={rocket} alt="rocket" />
      </div>
    </div>
  )
}

export default Login