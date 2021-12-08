import React, { useState} from 'react'
import { 
    Headers, 
    StyledHeader, 
    LogoContainer, 
    Title, 
    YellowTitle, 
    MenuStyled, 
    SelectStyled,
    OptionStyled,
    MenuContentStyled,
    MenuInconStyled,
    Li, 
    ButtonLogin, 
    ButtonSignUp, 
    CartIcon 
} from './style'
import cart from '../../assets/images/cart-icon.png'
import menu from '../../assets/images/menu.svg'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../routes/coordinator'
import { goToSignUpPage } from '../../routes/coordinator'

export const Header = () => {

    const history = useHistory()

    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show)
    }

    return (
        <Headers>
            <StyledHeader>
                <LogoContainer onClick={}>
                    <Title>PULSAR</Title>
                    <YellowTitle>IMAGENS</YellowTitle>
                </LogoContainer>

                <MenuContentStyled>
                    <MenuInconStyled onClick={toggleMenu} src={menu} width="24px"/>
                </MenuContentStyled>

                <MenuStyled show={show}>
                    <Li>
                        <SelectStyled>
                            <OptionStyled>Categorias</OptionStyled>
                            <OptionStyled>Agricultura</OptionStyled>
                            <OptionStyled>Animais</OptionStyled>
                            <OptionStyled>Brasil</OptionStyled>
                            <OptionStyled>Comida</OptionStyled>
                            <OptionStyled>Economia</OptionStyled>
                            <OptionStyled>Educação</OptionStyled>
                            <OptionStyled>Lazer</OptionStyled>
                            <OptionStyled>Natureza</OptionStyled>
                            <OptionStyled>Saúde</OptionStyled>
                        </SelectStyled>
                        <SelectStyled>
                            <OptionStyled>Português</OptionStyled>
                            <OptionStyled>Inglês</OptionStyled>
                        </SelectStyled>
                    </Li>
                    <Li>
                        <ButtonLogin onClick={() => goToLoginPage(history)}>ENTRAR</ButtonLogin>
                    </Li>
                    <Li>
                        <ButtonSignUp onClick={() => goToSignUpPage(history)}>CADASTRE-SE</ButtonSignUp>
                    </Li>
                    <Li>
                        <CartIcon src={cart}/>
                    </Li>
                </MenuStyled>
            </StyledHeader>
        </Headers>
    )
}