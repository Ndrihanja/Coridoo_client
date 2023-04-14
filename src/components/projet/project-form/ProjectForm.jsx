import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../api'
import AuthUser from '../../../AuthUser'
import './ProjectForm.scss'

const ProjectForm = () => {
    const { user } = AuthUser()
    const { http } = api()
    const navigate = useNavigate()
    const [membreOutput, setMembreOutput] = useState([]) //state affichage membre ajoute
    const [showResult, setShowResult] = useState(false)

    const [projet, setProjet] = useState({
        nom: '',
        deadline: '',
        description: '',
        creator_id: user.id,
        membres: []
    })
    const [membreSearch, setMembreSearch] = useState([])

    const handleSearch = ({ currentTarget }) => {
        const search = currentTarget.value

        if (search) {
            http.get('/user', { params: { search: search, creator_id: user.id } })
                .then(({ data }) => {
                    setMembreSearch(data.data)
                })
        } else {
            setMembreSearch(null)
        }

    }

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget

        setProjet({ ...projet, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        http.post('/projet', projet)
            .then((res) => {
                navigate(`/coridoo/projet/${res.data.data.id}/tache`)
            })

    }

    const addMembre = (membre, e) => {
        e.preventDefault()
        setProjet({ ...projet, membres: [...projet.membres, membre.id] })
        setMembreOutput([...membreOutput, membre])
    }

    const delMembre = (mpandrayAnjaraFototra, e) => {
        e.preventDefault()

        setMembreOutput(membreOutput.filter(membre => {
            return membre !== mpandrayAnjaraFototra
        }))
        setProjet({
            ...projet, membres: projet.membres.filter(membreId => {
                return membreId !== mpandrayAnjaraFototra.id
            })
        })

    }

    return (
        <div className='project-form'>
            <div className="intro">
                <h1>Creation de projet</h1>
                <span>Veuillez remplir le formulaire suivant</span>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-groups">
                    <div className="form-group">
                        <input type="text" name='nom' placeholder='Saisir le nom du projet' onChange={handleChange} />
                        <label htmlFor="nom">Nom du projet</label>
                    </div>
                    <div className="form-group">
                        <input type="datetime-local" name='deadline' placeholder='Saisir le nom du projet' onChange={handleChange} />
                        <label htmlFor="deadline">Deadline du projet</label>
                    </div>
                </div>
                <div className="form-group">
                    <textarea name="description" placeholder='Saisir la description du projet' rows="1" onChange={handleChange}></textarea>
                    <label htmlFor="description">Description du projet</label>
                </div>
                <div className="form-group">
                    {
                        showResult && membreSearch && (
                            <ul className="membre-search">
                                {
                                    membreSearch.map((membre, index) => (
                                        <li key={index} className="membre-result">
                                            <div className='membre-details'>
                                                <img src={membre.avatar} alt="avatar" />
                                                <div>
                                                    <p>{membre.nom + ' ' + membre.prenom}</p>
                                                    <span>{membre.email}</span>
                                                </div>
                                            </div>
                                            {
                                                projet.membres.find((membreId) => membreId === membre.id)
                                                    ? <span className='btn-Membre del' onClick={e => delMembre(membre, e)}>-</span>
                                                    : <span className='btn-Membre add' onClick={e => addMembre(membre, e)}>+</span>
                                            }
                                        </li>
                                    ))
                                }
                                <div className="close-div" onClick={() => setShowResult(false)}>Fermer</div>
                            </ul>
                        )
                    }
                    <input type="text" name='membre' placeholder='Rechercher membre...' onChange={handleSearch} onFocus={() => setShowResult(true)} />
                    <label htmlFor="membre">Ajouter membre</label>
                </div>
                <div className='member-scroll'>
                    {
                        membreOutput.length !== 0
                            ? (<ul className='members'>
                                {
                                    membreOutput.map((membre, index) => (
                                        <li key={index} className="membre-result">
                                            <div className='membre-details'>
                                                <img src={membre.avatar} alt="avatar" />
                                                <div>
                                                    <p>{membre.nom + ' ' + membre.prenom}</p>
                                                    <span>{membre.email}</span>
                                                </div>
                                            </div>
                                            <span className='btn-Membre del' onClick={e => delMembre(membre, e)}>-</span>
                                        </li>
                                    ))
                                }
                            </ul>)
                            : (<div className='no-member'>
                                <i className="fal fa-users"></i>
                                <span>Aucun membre</span>
                            </div>)
                    }
                </div>

                <div className='form-button'>
                    <button className='btn-Add'><i class="fal fa-redo"></i>Reset</button>
                    <button className='btn-Submit'><i class="fal fa-plus"></i> Creer</button>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm