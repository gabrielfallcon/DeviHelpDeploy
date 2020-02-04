import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import socketio from 'socket.io-client'
import api from '../../services/api'

import { Container, ListHelps, NewHelp, Button } from './styles'

export default function Dashboard() {
    const [helps, setHelp] = useState([])
    useEffect(() => {
        const user_id = localStorage.getItem('user')
        const socket = socketio('http://localhost:3333', {
            query: { user_id }
        })
    }, [])

    useEffect(() => {
        async function loadHelps() {
            // buscando o id do usuario no banco de dados do servidor 
            const user_id = localStorage.getItem('user')

            const res = await api.get('/dashboard', {
                headers: { user_id }
            })
            setHelp(res.data)
        }

        loadHelps()
    }, [])

    return (
        <Container>
            <ListHelps>
                <h1>Todas as Suas ajudas:</h1>
                {helps.map(help => (
                    <li key={help._id}>
                        <header style={{ backgroundImage: `url('${help.image_url}')` }} />
                        <strong>nivel: {help.typeHelp}</strong>
                        <strong>linguagem: {help.language}</strong>
                        <span>{help.descriptionHelp}</span>
                        <strong>{help.typeHelp == 'SMALL' ? 'R$ 12,99' : ''}</strong>
                        <strong>{help.typeHelp == 'MEDIUM' ? 'R$ 19,99' : ''}</strong>
                        <strong>{help.typeHelp == 'BIG' ? 'R$ 29,99' : ''}</strong>
                    </li>
                ))}
            </ListHelps>
            <NewHelp>
                <Button><Link to='/new'>Novo</Link></Button>
            </NewHelp>
        </Container>
    )
}