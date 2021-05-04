import React, { Component } from 'react';
import { Col } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Spinner from '../spinner/spinner';
import GOTService from "../../services/GOTService"
import RowBlock from '../rowBlock/rowBlock';
import Field from '../field/field'

export default class LinkItem extends Component {

    gotService = new GOTService();

    render() {
        return (
            <>
                <Col md='6'>
                    <CharDetails
                        // getData={this.props.getData}
                        getData={this.gotService.getAllBooks}
                        selectedID={this.props.bookId}>
                        <Field field label />
                    </CharDetails>
                </Col>
            </>
        )
    }

}