import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Spinner from '../spinner/spinner';

export default class CharacterPage extends Component {

    state = {
        selectedID: null,
        error: false
    }

    componentDidCatch(){
        console.log('error!');
        this.setState({error:true});


    }

    onCharSelected = (i) => {
        console.log('selected', i);
        this.setState({ selectedID: i });
    }

    render() {

        if(!this.state.error) return <Spinner />;

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails selectedID={this.state.selectedID} />
                </Col>
            </Row>
        );

    }

}