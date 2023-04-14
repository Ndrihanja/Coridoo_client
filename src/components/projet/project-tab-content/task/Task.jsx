import React, { useState } from 'react'
import './Task.scss'
import avatar from '../../../../img/Photo1.jpg'

const Task = () => {
    const [misokatra, setMisokatra] = useState(false)

    const sokafy = () => setMisokatra(!misokatra)

    return (
        <div className='task'>
            <div className='choice-form'>
                <div className='choices'>
                    <span className='active'><i class="fal fa-table"></i> Kanban</span>
                    <span><i class="fal fa-th-list"></i> Tableau</span>
                    <span><i class="fal fa-list"></i> Liste</span>
                </div>
                <button><i class="fal fa-sliders-h"></i> Filtre</button>
            </div>
            <section>
                <div className='parent-scroll'>
                    <div className='task-card'>
                        <div className='new'>
                            <div className='task-head'>
                                <div className='task-title'>
                                    <span className="task-color"></span>
                                    <span className="task-status">Nouveaux taches</span>
                                    <span className="task-count">4</span>
                                </div>
                                <i className="fal fa-ellipsis-v"></i>
                            </div>
                            <button className='btn-Submit' onClick={sokafy}>+</button>
                            <div className='card-list'>
                                <div className="card-scroll">
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='in-progress'>
                            <div className='task-head'>
                                <div className='task-title'>
                                    <span className="task-color"></span>
                                    <span className="task-status">En cours</span>
                                    <span className="task-count">2</span>
                                </div>
                                <i className="fal fa-ellipsis-v"></i>
                            </div>
                            <div className='card-list'>
                                <div className="card-scroll">
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='completed'>
                            <div className='task-head'>
                                <div className='task-title'>
                                    <span className="task-color"></span>
                                    <span className="task-status">Termine</span>
                                    <span className="task-count">3</span>
                                </div>
                                <i className="fal fa-ellipsis-v"></i>
                            </div>
                            <div className='card-list'>
                                <div className="card-scroll">
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pending'>
                            <div className='task-head'>
                                <div className='task-title'>
                                    <span className="task-color"></span>
                                    <span className="task-status">En attente</span>
                                    <span className="task-count">1</span>
                                </div>
                                <i className="fal fa-ellipsis-v"></i>
                            </div>
                            <div className='card-list'>
                                <div className="card-scroll">
                                    <div className="card">
                                        <div className='card-top'>
                                            <div className='top-header'>
                                                <span>Front Office</span>
                                                <i className="fal fa-ellipsis-v"></i>
                                            </div>
                                            <div className='top-desc'>
                                                <h6>Formulaire d'enregistrement</h6>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos atque magnam molestiae fugit nihil facere dignissimos laborum praesentium a adipisci.</p>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <img src={avatar} alt="avatar" title='Ndrenanja' />
                                            <span>
                                                <i className="fal fa-comment"></i>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        misokatra && (
                            <>
                                <div className="overlay" onClick={sokafy}>
                                </div>
                                <div className='task-modal'>
                                    <div className="modal-header">
                                        <h3>Ajouter une tache</h3>
                                        <i className="fal fa-times" onClick={sokafy}></i>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" name='description' placeholder='Saisir la description de la tache' />
                                            <label htmlFor="description">Description de la tache</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name='nom' placeholder='Saisir le nom de la tache' />
                                            <label htmlFor="nom">Nom de la tache</label>
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="1" name='note' placeholder='Saisir quelques notes'></textarea>
                                            <label htmlFor="note">Note concernant la tache</label>
                                        </div>
                                        <div className="form-group">
                                            <select type="text" name='membre_id'>
                                                <option value="">Choisir un membre</option>
                                            </select>
                                            <label htmlFor="membre_id">Assigner un membre</label>
                                        </div>
                                        <button className="btn-Submit"><i className="fal fa-plus"></i> Ajouter</button>
                                    </form>
                                </div></>
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default Task