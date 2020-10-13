import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import forestImg1 from '../assets/a1.jpg'
import forestImg2 from '../assets/a2.jpg'
import forestImg3 from '../assets/a3.jpg'
import forestImg4 from '../assets/a4.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={forestImg1}
                        alt="forestImg1"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Пока другие слепо следуют за истиной, помни - ничто не истинно</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={forestImg2}
                        alt="forestImg2"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>В то время, когда остальные ограничены моралью и законом, помни - всё дозволено</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={forestImg3}
                        alt="forestImg3"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Мы действуем во тьме, но служим свету</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={forestImg4}
                        alt="forestImg4"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Мы - Ассассины</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
