import styled from 'styled-components'
import banner from '../../assets/images/banner3.png'

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
`

export const BannerContainer = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    height: 500px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 24px;
`
export const StyledForm = styled.form`
    margin-top: 10px;
`

export const InputStyled = styled.input`
    border:none;
    background-color: white;
    width: 15rem;
    height: 2rem;
    font-size: 16px;
`

export const StyledSelect = styled.select`
    border:none;
    background-color: white;
    width: 15rem;
    height: 2rem;
    font-size: 16px;
`

export const ButtonStyled = styled.input`
    width: 10rem;
    height: 2rem;
    background-color: ${({theme}) => theme.primary};
    color: black;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.secundary};
    }
`