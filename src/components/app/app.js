import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import gotService from "../../services/GOTService"
import CharacterPage from '../characterPage/characterPage';
import BookPage from '../bookPage/bookPage'
import HousesPage from '../housesPage/housesPage'
import LinkItem from '../linkItem/linkItem'
import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends React.Component {

    gotService = new gotService();


    componentDidUpdate() {
        console.log("App update", this.state.selectedID)
    }


    render() {
        return (
            <>
                <Router>
                    <div className="app">
                        <Container>
                            <Header />
                        </Container>
                        <Container>
                            <Row>
                                <Col lg={{ size: 5, offset: 0 }}>
                                    <RandomChar />
                                </Col>
                            </Row>

                            <Route exact path="/chars/" component={CharacterPage} />
                            <Route exact path="/books/" component={BookPage} />
                            <Route exact path="/houses/" component={HousesPage} />
                            <Route exact path="/*/:id" render={
                                ({ match, history, location }) => {

                                    const { id } = match.params;
                                    const page = match.params[0];

                                    return <LinkItem
                                        itemId={id}
                                        page={page}
                                    />
                                }
                            } />

                        </Container>
                    </div>
                </Router>
            </>
        );

    }
};
