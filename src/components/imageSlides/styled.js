import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 7rem;
    padding-bottom: 7rem;
    flex-direction: column;
    color: ${({theme})  => theme.primary};
`

export const ImgStyled = styled.img`
    width: 600px;
    height: 400px;
`