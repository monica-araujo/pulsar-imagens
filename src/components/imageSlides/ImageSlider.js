import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
import { Slider, ImgStyled, Container } from './styled'
import styles from './styled.css'

export const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const lenght = slides.lenght

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }

    if(!Array.isArray(slides) || slides.lenght <= 0){
        return null
    }

    return (
        <Container>
            <h1>Imagens adicionadas recentemente</h1>
            <Slider>
                <FaArrowCircleLeft className={styles.left_arrow} onClick={prevSlide} />
                <FaArrowCircleRight className={styles.right_arrow} onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<ImgStyled src={slide.image} />)}
                        </div>
                    )
                })}
            </Slider>
        </Container>
    )
}