import React from 'react';
import { Carousel, ImageSlider } from '../../components/imageSlides/ImageSlider';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Newsletter } from '../../components/Newsletter/Newsletter';
import { MainContainer, BannerContainer, InputStyled, StyledSelect, ButtonStyled, StyledForm } from './styled';
import { SliderData } from '../../components/imageSlides/SliderData';

export const HomePage = () => {
    return(
        <div>
            <Header/>
            <MainContainer>
                <BannerContainer>
                    <h1>O mais completo banco de imagens do Brasil</h1>
                        <StyledForm>
                            <label>
                                <InputStyled type="text" name="search" placeholder="Nova busca" />
                            </label>
                            <StyledSelect>
                                <option>Foto e vídeo</option>
                                <option>Foto</option>
                                <option>Vídeo</option>
                            </StyledSelect>
                            <ButtonStyled type="submit" value="Buscar" />
                        </StyledForm>
                </BannerContainer>
            </MainContainer>
            <ImageSlider slides={SliderData}/>
            <Newsletter/>
            <Footer/>
        </div>
        
    )
}