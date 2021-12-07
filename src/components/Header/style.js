import styled from 'styled-components'

export const Headers = styled.header`
  background-color: ${({theme}) => theme.tertiary};
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
`
export const StyledHeader = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-left: 10%;
  cursor: pointer;
`

export const Title = styled.h2`
  color:white;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
`

export const YellowTitle = styled.h4`
  color: ${({theme}) => theme.primary};
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
`
export const MenuStyled = styled.menu`
  display: flex;
  list-style: none;
  font-size: 14px;
  align-items: center;
  margin: 1%;
  overflow: hidden;

  ${({ theme }) => theme.desktop`
    display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background: ${({ theme }) => theme.tertiary};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  `}
`;

export const MenuContentStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  overflow: hidden;
  display: none;
  height: 40px;

  ${({ theme }) => theme.desktop`
    display: flex;
    align-items: center;
    position: fixed;
  `}
`

export const MenuInconStyled = styled.img`
  cursor: pointer;
`

export const Li = styled.li`
  cursor: pointer;
  padding: 15px;
`;

export const SelectStyled = styled.select`
  width: 7rem;
  height: 2rem;
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`

export const OptionStyled = styled.option`
  background-color: ${({theme}) => theme.tertiary};
`

export const ButtonLogin = styled.button`
  background-color: transparent;
  color: white;
  border-color: white;
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  font-weight: bold;
  &:hover{
    color:black;
    background-color: white;
    cursor: pointer
  }
`

export const ButtonSignUp =  styled.button`
  background-color: ${({theme}) => theme.primary};
  color: black;
  width: 7rem;
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

export const CartIcon = styled.img`
  cursor: pointer;
  width: 40px;
`