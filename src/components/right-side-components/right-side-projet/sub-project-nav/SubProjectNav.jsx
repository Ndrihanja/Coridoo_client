import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SubProjectNav.scss'
import { StatusColorData as status } from '../../../../data/StatusColorData'

const SubProjectNav = ({ item, projets }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)

    return (
        <ul className='projetNav'>
            <li onClick={showSubnav}>
                <i className={subnav
                    ? ('fal ' + item.iconOpen)
                    : ('fal ' + item.iconClosed)
                }>
                </i>
                {item.title}
            </li>
            <div className="subnav-scroll">
                <div className='subnav'>
                    {
                        subnav && projets[item.title].map((projet, index) => {
                            return (
                                projet.archive === 0
                                    ? (
                                        <NavLink to={projet.id + '/tache'} key={index}><i className={"text-small far fa-" + status[projet.status_id]}></i> <span>{projet.nom}</span></NavLink>
                                    )
                                    : (
                                        <NavLink to={'archive/' + projet.id + 'tache'} key={index}><i className={"text-small far fa-" + status[projet.status_id]}></i> <span>{projet.nom}</span></NavLink>
                                    )
                            )
                        })
                    }
 
                </div>
            </div>

        </ul>
    )
}

export default SubProjectNav