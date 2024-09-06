import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='not-found'>
            <div className="not-found__blok">
                <h1>404</h1>
                <p>Page Not Found</p>
                <b>Move to <Link to='/'>HOME</Link></b>
            </div>
        </div>
    )
}