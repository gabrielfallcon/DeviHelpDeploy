import React, { useState } from 'react'
import api                 from '../../services/api'
import { Link }            from 'react-router-dom'

import './styles.css'

export default function Singin({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const res = await api.post('sessions', {
            email
        })

        const { _id } = res.data

        localStorage.setItem('user', _id)

        history.push('/option')

    }

    return (
        <div className="indexRegister">
            <div className="text">
                <h1>Ta com dúvida? A gente te ajuda!</h1>
                <a href="">Saiba mais</a>
                <div className="img"/>
            </div>

            <div className="register">
                <div className="btns">
                    <Link className="btn btnSing" to='/'>Entrar</Link>
                    <Link className="btn margin" to='/register'>Cadastrar</Link>
                </div>
                <p>
                    <strong>Receba</strong>! <strong>Ofereca</strong>! Ajude todos a <strong>crescer</strong>.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-MAIL *</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="digite seu email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required="true"
                    />

                    <button className="btn btnSing" type="submit">Entrar</button>
                </form>
            </div>

        </div>
    )
}