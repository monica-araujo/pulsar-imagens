import React from 'react'
import {FooterContainer, LogoContainer, Title, YellowTitle, MainText, Nav, Paragraph, SocialLogo, SocialLogoContainer, CopyrightText, PrivacityContainer, PrivacityText} from '../Footer/style'
import facebookIcon from '../../assets/images/facebook.png'
import instagramIcon from '../../assets/images/instagram.png'

export const Footer = () => {
    return(
        <div>
            <FooterContainer>
                <LogoContainer>
                    <Title>PULSAR</Title>
                    <YellowTitle>IMAGENS</YellowTitle>
                    <CopyrightText>Copyright © 2021 Pulsar Imagens. All rights reserved.</CopyrightText>
                </LogoContainer>
                <Nav>
                    <MainText>Como podemos ajudar?</MainText>
                    <Paragraph>Quem somos</Paragraph>
                    <Paragraph>Dúvidas</Paragraph>
                    <Paragraph>Planos e preços</Paragraph>
                    <Paragraph>Contato</Paragraph>
                </Nav>
                <SocialLogo>
                    <MainText>Siga nas redes sociais: </MainText>
                    <SocialLogoContainer>
                        <a>
                            <img src={facebookIcon} width="35px"/>
                        </a>
                        <a>
                            <img src={instagramIcon} width="32px"/>
                        </a>
                    </SocialLogoContainer>
                </SocialLogo>
            </FooterContainer>
            <PrivacityContainer>
                <PrivacityText>Politica de Privacidade | Configurações de privacidade</PrivacityText>
                <p> Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            </PrivacityContainer>
        </div>
    )
}