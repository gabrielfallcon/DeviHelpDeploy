import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;

    h1 {
        margin-top: 50px
    }
`
export const ListHelps = styled.ul`
    width: 60%;
    height: 90vh;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;
    margin-top: 50px;
    margin-left: 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 3px;

    li {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #444;
        border-radius: 4px;
        height: 400px;
    }

    header {
        width: 400px;
        height: 200px;
        background-size: cover;
        border-radius: 4px;
    }

    span {
        min-height: 80px;
        margin-top: 20px;
        font-size: 15px;
        color: gray;
        border: 1px solid #999;
        border-radius: 5px;
        padding: 10px;
    }

    strong {
        margin-top: 10px;
        font-size: 18px;
        color: #444;
    }

    h1 {
        margin-top: 25%; 
    }
`

export const NewHelp = styled.div`
    height: 80vh;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.a`
     height: 42px;
    width: 200px;
    background: #f66;
    cursor: pointer;
    padding: 0 20px;
    border: 0;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
    }
`