import React, { useState } from 'react'
import api   from '../../services/api'
import { Link } from 'react-router-dom'

import Routes from '../../routes'

import './styles.css'




export default function Login() {
    
    return (
        <div className="indexHome">
            <Routes/>
            <div className="indexSobre">
                <ul className="list1">
                    <li className="li1">
                        <h1>
                            <strong>Confiança</strong>
                        </h1>
                        <p>Lembramos que segurança é um critério minimo para qualquer plataforma, 
                            principalmente as que envolve qualquer tipo de dinheiro</p>
                    </li>
                    <li className="li1">
                        <h1>
                            <strong>Poder de confiar</strong>
                        </h1>
                        <p>Lembramos que segurança é um critério minimo para qualquer plataforma, 
                            principalmente as que envolve qualquer tipo de dinheiro</p>
                    </li>
                    <li className="li1">
                        <h1>
                            <strong>Ajude a crescer</strong>
                        </h1>
                        <p>Lembramos que segurança é um critério minimo para qualquer plataforma, 
                            principalmente as que envolve qualquer tipo de dinheiro</p>
                    </li>
                    <li className="li1">
                        <h1>
                            <strong>Confiança</strong>
                        </h1>
                        <p>Lembramos que segurança é um critério minimo para qualquer plataforma, 
                            principalmente as que envolve qualquer tipo de dinheiro</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
// const [email,      setEmail]      = useState('')
// const [name,       setName]       = useState('')
// const [profission, setProfission] = useState('')

// async function handleSubmit(e) {
//     e.preventDefault()

//     const res = await api.post('/sessions', { email })

//     const { _id } = res.data

//     localStorage.setItem('user', _id)

//     history.push('/dashboard')
// }

// async function handleSubmitRegister(e) {
//     e.preventDefault()

//     const res = await api.post('/sessions', {
//         email,
//         name,
//         profission
//     })

//     // pegando o id do usuario logado
//     const { _id } = res.data

//     // armazenando no banco de dados do servidor para que em todo o percuso ser identificado com seu proprio id 
//     localStorage.setItem('user', _id)

//     // redirecionamento de rotas quando handleSubmit é chamado
//     history.push('/dashboard')
// }
// <form onSubmit={handleSubmitRegister}>
            //     <label htmlFor="email">E-MAIL *</label>
            //     <input 
            //         type="email" 
            //         id="email" 
            //         placeholder="seu melhor email"
            //         value={email}
            //         onChange={event => setEmail(event.target.value)}
            //         required="true"
            //     />

            //     <label htmlFor="name">NOME *</label>
            //     <input 
            //         type="text" 
            //         id="name" 
            //         placeholder="seu nome completo"
            //         value={name}
            //         onChange={event => setName(event.target.value)}
            //         required="true"
            //     />

            //     <label htmlFor="prof">PROFISSÃO *</label>
            //     <input 
            //         type="text" 
            //         id="prof" 
            //         placeholder="o que você faz?"
            //         value={profission}
            //         onChange={event => setProfission(event.target.value)}
            //         required="true"
            //     />

            //     <button className="btn" type="submit">Cadastrar</button>
            // </form>

            // <form onSubmit={handleSubmit}>
            //     <label htmlFor="email">E-MAIL *</label>
            //     <input
            //         type="email"
            //         id="email"
            //         placeholder="digite seu email"
            //         value={email}
            //         onChange={event => setEmail(event.target.value)}
            //         required="true"
            //     />

            //     <button className="btn btnSing" type="submit">Entrar</button>
            // </form>