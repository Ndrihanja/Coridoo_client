import React, { useEffect, useState } from 'react'
import { useParams,     , Routes, Route } from 'react-router-dom'
import api from '../../../api.js'
import { StatusColorData as status } from '../../../data/StatusColorData'
import Discussion from '../project-tab-content/discussion/Discussion.jsx'
import Task from '../project-tab-content/task/Task.jsx'
import Fichier from '../project-tab-content/fichier/Fichier.jsx'
import Chronologie from '../project-tab-content/chronologie/Chronologie.jsx'
import './ViewProject.scss'

const ViewProject = () => {
    const { http } = api()
    const [projet, setProjet] = useState([])
    const [membres, setMembres] = useState([])
    const { projetId } = useParams()

    useEffect(() => {
        const fetchProjet = async () => {
            try {
                const response = await http.get(`/projet/${projetId}`)
                setProjet(response.data.data[0])
                setMembres(response.data.data[0].membres)
            } catch (error) {
                console.log(error)
            }
        }
        const timer = setTimeout(() => {
            fetchProjet()
        }, 700)
        return () => clearTimeout(timer)
    }, [http, projetId])

    return (
        <div className='view-project'>
            <div className='header'>
                <div className='title-params'>
                    <div className="title">
                        <h2><i className={"text-small far fa-" + status[projet.status_id]}></i> <span>{projet.nom}</span></h2>
                    </div>
                    <div className='options'>
                        <div className="form-search">
                            <i className="fal fa-search"></i>
                            <input type="text" name="search" id="search" placeholder='Recherche...' autoComplete='off' />
                        </div>
                        <i className="fal fa-star"></i>
                        <i className="far fa-ellipsis-v"></i>
                    </div>
                </div>
                <p>{projet.description}</p>
                <div className='projet-tabs'>
                    <div className='tab'>
                        <NavLink to="discussion">Discussion</NavLink>
                        <NavLink to="tache">Tâches</NavLink>
                        <NavLink to="fichier">Fichiers</NavLink>
                        <NavLink to="chronologie">Chronologie</NavLink>
                    </div>
                    <div className='avatars'>
                        <div className="images">
                            {
                                membres
                                .filter((membre, index) => index < 3)
                                .map((membre, index) => (<img src={membre.avatar} key={index} alt={membre.id} />))
                            }
                            {
                                membres.length > 3 && (<span className="membersCount">+{membres.length - 3}</span>)
                            }

                        </div>
                        <span className='separator'></span>
                        <button className='btn-Add'>+</button>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Routes>
                    <Route path='/discussion' element={<Discussion />} />
                    <Route path='/tache' element={<Task />} />
                    <Route path='/fichier' element={<Fichier />} />
                    <Route path='/chronologie' element={<Chronologie />} />
                </Routes>
            </div>
        </div>
    )
}

export default ViewProject