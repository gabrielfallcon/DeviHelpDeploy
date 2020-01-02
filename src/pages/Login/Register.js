import React, {useState} from 'react'
import { Link }          from 'react-router-dom'
import api               from '../../services/api'

import './styles.css'

export default function Register({ history }) {
    const [email, setEmail]           = useState('')
    const [name, setName]             = useState('')
    const [profission, setProfission] = useState('')

    async function handleSubmitRegister(e) {
        e.preventDefault()

        const res = await api.post('/sessions', {
            email,
            name,
            profission
        })

        const { _id } = res.data

        localStorage.setItem('user', _id)

        history.push('/dashboard')
    }

    return(
        <div className="indexRegister">
            <div className="text">
                <h1>Cadastre-se, nos ajude a te ajudar</h1>
                
            </div>

            <div className="register">
                <div className="btns">
                    <Link className="btn btnSing" to='/'>Entrar</Link> 
                    <Link className="btn margin" to='/register'>Cadastrar</Link>
                </div>
                <p>
                <strong>Receba</strong>! <strong>Ofereca</strong>! Ajude todos a <strong>crescer</strong>.
                </p>

                <form onSubmit={handleSubmitRegister}>
                    <label htmlFor="email">E-MAIL *</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="seu melhor email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required="true"
                    />

                    <label htmlFor="name">NOME *</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="seu nome completo"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required="true"
                    />

                    <label htmlFor="prof">PROFISSÃO *</label>
                    <input 
                        type="text" 
                        id="prof" 
                        placeholder="o que você faz?"
                        value={profission}
                        onChange={event => setProfission(event.target.value)}
                        required="true"
                    />

                    <button className="btn" type="submit">Cadastrar</button>
                </form>
            </div>
            
        </div>
    )
}