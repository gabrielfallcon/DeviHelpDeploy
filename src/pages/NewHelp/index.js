import React, { useState, useMemo } from 'react'

import camera from '../../assets/camera.png'

import api from '../../services/api'

import './styles.css'

export default function NewHelp({ history }) {

    const [image, setImage]                     = useState('')
    const [language, setLanguage]               = useState('')
    const [typeHelp, setTypeHelp]               = useState('')
    const [descriptionHelp, setDescriptionHelp] = useState('')

    const preview = useMemo(()=> {
        return image ? URL.createObjectURL(image) : null
    }, [image])


    async function handleSubmit(e) {
        e.preventDefault()

        const data    = new FormData()
        const user_id = localStorage.getItem('user') 

        data.append('image', image)
        data.append('language', language)
        data.append('typeHelp', typeHelp)
        data.append('descriptionHelp', descriptionHelp)

        await api.post('/helps', data, {
            headers : {user_id}
        })

        history.push('/dashboard')
    }

    return(
        <div className="indexNew">

            <form onSubmit={handleSubmit}>
                <label 
                    id="image"
                    style={{backgroundImage: `url(${preview})`}}
                    className={image ? 'has-image' : ''}
                >
                    <input type="file" onChange={event => setImage(event.target.files[0])}/>
                    <img src={camera} alt="select img"/>
                </label>

                <label htmlFor="language">Linguagem <strong>*</strong></label>
                <input
                    id="language"
                    placeholder="digite o nome da stack"
                    value={language}
                    onChange={event => setLanguage(event.target.value)}
                />

                <label htmlFor="typeHelp">Nivel de Dificuldade <span>(ex: SMALL, MEDIUM, BIG)</span></label>
                <input
                    id="typeHelp"
                    placeholder="nivel de dificuldade"
                    value={typeHelp}
                    onChange={event => setTypeHelp(event.target.value)}
                />

                <label htmlFor="description">Descrição <strong>*</strong></label>
                <input
                    id="description"
                    placeholder="breve descrição do problema"
                    value={descriptionHelp}
                    onChange={event => setDescriptionHelp(event.target.value)}
                />

                <button className="btn" type="submit" >Cadastrar Ajuda</button>
            </form>
        </div>
    )
}