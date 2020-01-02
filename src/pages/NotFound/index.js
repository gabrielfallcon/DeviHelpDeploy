import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function NotFound() {
    return(
        <div className="notFound">
                <Link className="btnHome" to="/">Home</Link>
        </div>
    )
}