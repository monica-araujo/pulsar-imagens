import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    padding-top: 10rem;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4rem;
`

export const MainText = styled.h1`
  color: RGB(97, 97, 97);
  
`

export const InputContainer = styled.div`
  display: flex;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
`

export const SendButton = styled.button`
  background-color: ${({theme}) => theme.primary};
  color: black;
  width: 11rem;
  height: 2rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: 5px;
  font-weight: bold;
  &:hover{
    cursor: pointer;
    border-color: black;
    background-color: ${({theme}) => theme.secundary};
  }
`

export const SignUpText = styled.p`
    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.primary}
    }
`