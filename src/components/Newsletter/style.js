import styled from "styled-components";

export const NewsletterContainer=styled.div`
  width: 100%;
  margin-top: 3rem;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: rem;
`

export const MainText = styled.h1`
  color: ${({theme}) => theme.primary};
  
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
  width: 7rem;
  margin-bottom: 7rem;
  height: 2rem;
  border-color: transparent;
  border-radius: 5px;
  font-weight: bold;
  &:hover{
    cursor: pointer;
    border-color: black;
    background-color: ${({theme}) => theme.secundary};
  }
`