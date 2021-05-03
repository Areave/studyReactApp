import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Spinner from '../spinner/spinner';
import GOTService from "../../services/GOTService"
import RowBlock from '../rowBlock/rowBlock';
import Field from '../field/field'

export default class CharacterPage extends Component {

    state = {
        selectedID: null,
        error: false
    }

    gotService = new GOTService();

    componentDidCatch() {
        console.log('error!');
        this.setState({ error: true });


    }

    onItemSelected = (i) => {
        console.log('selected', i);
        this.setState({ selectedID: i });
    }




    render() {

        const itemList = (
            <Col md='6'>
                <ItemList
                    getData={this.props.getData}
                    onItemSelected={this.onItemSelected}
                    renderItem={this.props.renderItem}
                />
            </Col>
        );

        const charDetails = (
            <Col md='6'>
                <CharDetails
                    setData={this.props.getData}
                    selectedID={this.state.selectedID} />

            </Col>

        );

        if (this.state.error) return <Spinner />;

        return <RowBlock left={itemList} right={charDetails} />

    }

}