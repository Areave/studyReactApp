import React, { Component } from 'react';
import { Col } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Spinner from '../spinner/spinner';
import GOTService from "../../services/GOTService"
import RowBlock from '../rowBlock/rowBlock';
import Field from '../field/field'
import {withRouter} from 'react-router-dom'



class TemplatePage extends Component {

    state = {
        selectedID: null,
        error: false
    }

    gotService = new GOTService();

    componentDidCatch() {
        this.setState({ error: true });


    }

    onItemSelected = (i) => {
        this.setState({ selectedID: i });
    }




    render() {

        const itemList = (
            <Col md='6'>
                <ItemList
                    getData={this.props.getData}
                    onItemSelected={(itemId) => {this.props.history.push(`${itemId}`)}}
                    renderItem={this.props.renderItem}
                />
            </Col>
        );

        const charDetails = (
            <Col md='6'>
                <CharDetails
                    getData={this.props.getData}
                    selectedID={this.state.selectedID}>
                    <Field field label />
                </CharDetails>
            </Col>

        );

        if (this.state.error) return <Spinner />;

        return <RowBlock left={itemList} right={charDetails} />

    }

}

export default withRouter(TemplatePage);