import React from 'react'

const EmptyView = ({ icon, desc }) => {
    return (
        <div className='empty-view'><i class={"fal fa-" + icon}></i> <h4>{desc}</h4></div>
    )
}

export default EmptyView