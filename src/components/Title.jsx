import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Title() {

    const location = useLocation()
    const componentName = location.pathname.replace('/', '')

    return (
        <div className='pagename'>
            <div className="pagename-blok">
                <h1>{componentName}</h1>
                <p>
                    <Link to={'/'} className='pagename-parent'>Home</Link>
                    <span className='pagename-drop'>/</span>
                    <span className='pagename-child'>{componentName}</span>
                </p>
            </div>
        </div>
    )
}