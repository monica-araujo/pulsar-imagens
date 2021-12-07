import { style } from '@material-ui/system'
import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 40%;
    background-color: ${({theme}) => theme.tertiary};
    display: grid;
	grid-template-columns: 100px 150px 1fr 1fr  100px;
	gap: 30px;
`

export const LogoContainer = styled.div`
    padding-top: 3%;
    margin-left: 10%;
    grid-column-start: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Title = styled.h2`
    color:white;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    cursor: pointer;
`

export const YellowTitle = styled.h4`
    color: ${({theme}) => theme.primary};
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    cursor: pointer;
`

export const CopyrightText = styled.p`
    color: white;
`

export const MainText = styled.h3`
    margin-top: 2rem;
    padding-bottom: 1rem;
    color: ${({theme}) => theme.primary};
`

export const Nav = styled.div`
    flex-direction: column;
    margin-left: 5rem;
`

export const Paragraph = styled.p`
    color: white;
    margin: 2%;
    padding-bottom: 0.3rem ;
    font-weight: bold;
    &:hover {
        color: ${({theme}) => theme.primary};
        cursor: pointer;
    }
`

export const SocialLogo = styled.div`
	grid-column-start: 4;
    padding-bottom: 1rem;
	display: flex;
    margin-left: 3rem;
	flex-direction: column;
	justify-content: center;
` 
export const SocialLogoContainer = styled.div`
	a{

		padding: 15px;
        cursor: pointer;
	}
`
