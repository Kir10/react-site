import React, {Component} from 'react'
import CarouselBox from '../Components/CarouselBox'
import {Container, CardDeck, Card, Button} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>

                <Container>
                    <h2 className={"text-center m-4"}>Out team</h2>
                    <CardDeck>
                        <Card bg="warning">
                            <Card.Img
                                variant="top"
                                src={"https://i.pinimg.com/originals/fe/77/b9/fe77b93a3ab61f88df632877f4dd8aeb.jpg"}
                            />
                            <Card.Body>
                                <Card.Title>Developer Tom</Card.Title>
                                <Card.Text>Когда ты смотришь ей в глаза, а она смотрит в твои, всё становится не так,
                                    как обычно. Ты чувствуешь прилив сил и слабеешь в то же время. Ты вроде радуешься,
                                    и в то же самое время — тебе страшно. Тебе не совсем понятно, что ты чувствуешь,
                                    но ты понимаешь, каким человеком хочешь быть. Как будто ты достиг недостижимого.

                                </Card.Text>
                                <Button variant="dark">About Tom</Button>
                            </Card.Body>
                        </Card>
                        <Card bg={"primary"}>
                            <Card.Img
                                variant="top"
                                src={"https://c.pxhere.com/photos/0f/56/animal_animal_photography_baboon_close_up_cute_face_funny_hairy-1490907.jpg!d"}
                            />
                            <Card.Body>
                                <Card.Title>Developer Mick</Card.Title>
                                <Card.Text>С чем бы нам ни довелось столкнуться, какие бы чувства ни бушевали в душе,
                                    у нас всегда есть выбор. От нашего выбора зависит какими мы станем, и мы всегда можем выбрать правильный путь.
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Card.Text>
                                <Button variant={"dark"}>About Mick</Button>

                            </Card.Body>
                        </Card>
                        <Card bg={"danger"}>
                            <Card.Img
                                variant="top"
                                src={"https://avatars.mds.yandex.net/get-pdb/1655359/258202b5-de31-4ab9-88e4-d11998a28576/s1200?webp=false"}
                            />
                            <Card.Body>
                                <Card.Title>Developer Tony</Card.Title>
                                <Card.Text>Когда ты владеешь такой силой и не используешь ее,
                                    ты всегда будешь виновен в том, что не предотвратил.
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Card.Text>
                                <Button variant={"dark text-c"}>About Tony</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>

        );
    }
}