import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className={"flex-column mt-2"}>
                                <Nav.Item>
                                    <Nav.Link eventKey={"first"}>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"second"}>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"third"}>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fourth"}>Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fifth"}>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className={"mt-3"}>
                                <Tab.Pane eventKey={"first"}>
                                    <img className="img-thumbnail mx-auto d-block" style={{width: '50%'}}
                                         src="https://ae01.alicdn.com/kf/HTB1cJ_FoTlYBeNjSszcq6zwhFXa6/-.jpg_q50.jpg"
                                        alt="first"
                                    />
                                        <p>— Почему половина людей, которых я встречаю на пути, тут же решают напасть на вооруженного ведьмака? Может, у меня с лицом что не то?</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    <img className="img-thumbnail mx-auto d-block" style={{width: '50%'}}
                                        src="https://cdn.shopify.com/s/files/1/0209/7756/products/559-2-bear-graphic.jpg?v=1484058975"
                                        alt="second"
                                    />
                                    <p>— С давних пор самым страшным врагом для людей был вовсе не чужеземец, а сосед.</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    <img className="img-thumbnail mx-auto d-block" style={{width: '50%'}}
                                        src="https://avatars.mds.yandex.net/get-pdb/2918639/d6c91ff6-8c1c-421a-a104-b12f8fa91041/s1200"
                                        alt="third"
                                    />
                                    <p>— Дикие собаки опаснее волков. Потому что волки охотятся, чтобы утолить голод... А дикие собаки убивают для забавы.
                                        <br/>— Совсем как люди.</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey={"fourth"}>
                                    <img className="img-thumbnail mx-auto d-block" style={{width: '50%'}}
                                        src="https://i.pinimg.com/originals/1e/31/26/1e31266f52472a5469c4ec595cd40361.jpg"
                                        alt="fourth"
                                    />
                                    <p>— Ты что, хочешь превратить прекрасный акт альтруизма в дурацкий обмен услугами?</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey={"fifth"}>
                                    <img className="img-thumbnail mx-auto d-block" style={{width: '50%'}}
                                        src="https://go3.imgsmail.ru/imgpreview?key=16c060edf0e1372d&mb=storage"
                                        alt="fifth"
                                    />
                                    <p>— У тебя есть какая-нибудь одежда, кроме черной и белой?
                                        <br/>— Хм... Бельё.</p>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}
