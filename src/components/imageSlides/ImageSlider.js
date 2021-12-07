import React from 'react'
import { SliderData } from './SliderData'
import { ImgStyled, Container } from './styled'
import Carousel, { slidesToShowPlugin,  arrowsPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'


export const ImageSlider = () => {

    return (
        <Container>
            <h1>Adicionadas recentemente</h1>
            <Carousel
                plugins={[
                    'centered',
                    'infinite',
                    'arrows',
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 2,
                     },
                   },
                   {
                     resolve: slidesToScrollPlugin,
                     options: {
                      numberOfSlides: 2,
                     },
                   },
                 ]}   
            >
                {SliderData.map(data => {
                    return (
                        <ImgStyled src={data.image} />
                    )
                })}
            </Carousel>

        </Container>
    )
}