import React    from 'react'
import { Link } from 'react-router-dom'

export default function Option() {
    return(
        <div className="indexOption">
            <h1 id="titleOption">O que você precisa?</h1>
            <div className="btns">
                <Link  className="btn btnSing" to="/dashboard">Ajuda</Link>
                <Link  className="btn margin" to="#">Ajudar</Link>
            </div>
        </div>
    )
}