import React from 'react'
import { SliderData } from './SliderData'
import { ImgStyled, Container } from './styled'
import Carousel, { slidesToShowPlugin,  arrowsPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Icon from 'react-fa'

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
                resolve: slidesToShowPlugin, arrowsPlugin,
                options: {
                numberOfSlides: 2,
                arrowLeft: <button><Icon name="angle-double-left" /></button>,
                arrowLeftDisabled:<button><Icon name="angle-left" /></button>,
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