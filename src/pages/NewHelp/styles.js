import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 500px;
        background-color: #f8f8f9;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 30px;
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        display: none;
    }
`