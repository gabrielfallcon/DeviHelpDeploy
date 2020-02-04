import React    from 'react'
import { Link } from 'react-router-dom'

import { Options, Title, Buttons } from './styles'

export default function Option() {
    return(
        <Options>
            <Title>O que você precisa?</Title>
            <Buttons>
                <Link  className="btn btnSing" to="/dashboard">Ajuda</Link>
                <Link  className="btn margin" to="#">Ajudar</Link>
            </Buttons>
        </Options>
    )
}