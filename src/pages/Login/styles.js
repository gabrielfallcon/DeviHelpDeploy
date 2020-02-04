import styled from 'styled-components'
import img1 from '../../assets/duvidaBanner.png'
import img2 from '../../assets/bannerOption.png'

export const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Registers = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
    }
`

export const Text = styled.div`
    width: 900px;
    height: 600px; 
    font-size: 20px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: url(${img1}) no-repeat;
    background-size: contain;

    h1 {
        width: 500px;
        margin-top: 100px;
        margin-left: 15px;
    }

    a {
        width: 200px;
        padding: 15px;
        margin-top: -100px;
        border-radius: 2px;
        background-color: #fff;
        text-decoration: none;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center; 
    }
`

export const Buttons = styled.div`
    width: 400px;
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Options = styled.div`
    height: 650px;
    width: 100%;
    min-height: 70vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background: url(${img2}) no-repeat;
    background-position: center;
    background-size: contain; 
`

export const Title = styled.h1`
    margin-top: 20px;

`