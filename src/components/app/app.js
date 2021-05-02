import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from "../../services/GOTService"
import CharacterPage from '../characterPage/characterPage';



export default class App extends React.Component {



    componentDidUpdate(){
        console.log("App update", this.state.selectedID)
    }


    render() {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            <RandomChar />
                        </Col>
                    </Row>
                    <CharacterPage />

                </Container>
            </>
        );

    }
};
