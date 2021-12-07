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

export const Header = () => {

    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show)
    }

    return (
        <Headers>
            <StyledHeader>
                <LogoContainer onClick>
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
                        <ButtonLogin>ENTRAR</ButtonLogin>
                    </Li>
                    <Li>
                        <ButtonSignUp>CADASTRE-SE</ButtonSignUp>
                    </Li>
                    <Li>
                        <CartIcon src={cart}/>
                    </Li>
                </MenuStyled>
            </StyledHeader>
        </Headers>
    )
}