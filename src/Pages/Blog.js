import React, {Component} from 'react';
import {Media, Container, Col, Row, Card, ListGroup} from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={"9"}>
                            <Media className={"m-5"}>
                                <img
                                    width={150}
                                    height={150}
                                    className={"mr-3"}
                                    src={"https://frontiersmeetings.com/admin/uploads/conferences/1529848540.jpg"}
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>На, Лобанов, и купи себе на эти деньги мозги или книжку. Лучше книжку. Мозги,
                                        я боюсь, твой организм отторгнет.</p>
                                </Media.Body>
                            </Media>
                            <Media className={"m-5"}>
                                <img
                                    width={150}
                                    height={150}
                                    className={"mr-3"}
                                    src={"https://frontiersmeetings.com/admin/uploads/conferences/1529848540.jpg"}
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Человеческий мозг – великолепная штука. Он работает до той самой минуты,
                                        когда ты встаешь, чтобы произнести речь.</p>
                                </Media.Body>
                            </Media>
                            <Media className={"m-5"}>
                                <img
                                    width={150}
                                    height={150}
                                    className={"mr-3"}
                                    src={"https://frontiersmeetings.com/admin/uploads/conferences/1529848540.jpg"}
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Ваш мозг может все. Абсолютно все. Главное, убедить себя в этом. Руки не знают,
                                        что они не умеют отжиматься, ноги не знают, что они слабые, живот не знает,
                                        что он сплошной жир. Это знает ваш мозг. Убедив себя в том, что вы можете все,
                                        вы сможете действительно все.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md="3">
                            <h5 className={"text-center mt-5"}>Categories</h5>
                            <Card>
                                <ListGroup variant={"flush"}>
                                    <ListGroup.Item>Html/Css</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>PHP</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C++</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card className="mt-3">
                                <Card.Body>
                                    <Card.Title>Side widget</Card.Title>
                                    <Card.Text>Мозг — как мышца. Чем сильнее его использовать,
                                        тем сильнее он становится.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}