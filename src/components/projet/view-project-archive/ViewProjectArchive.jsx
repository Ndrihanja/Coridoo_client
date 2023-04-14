import React from 'react'
import { useParams } from 'react-router-dom'

const ViewProjectArchive = () => {
  const { projetId } = useParams()
  return (
    <div className='view-project-archive'>
        <h1>Nom projet: {projetId}</h1>
    </div>
  )
}

export default ViewProjectArchive
