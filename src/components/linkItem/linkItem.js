import React, { Component } from 'react';
import { Col } from 'reactstrap';
import CharDetails from '../charDetails';
import GOTService from "../../services/GOTService"
import Field from '../field/field'

class LinkItem extends Component {

    render() {
        return (
            <>
                <Col md='6'>
                    <CharDetails
                        // getData={this.props.getData}
                        getData={this.props.getData}
                        selectedID={this.props.itemId}>
                        <Field field label />
                    </CharDetails>
                </Col>
            </>
        )
    }

}


const f = (View) => {
    return class extends Component {
  
        render() {

            console.log('render func');

            const page = this.props.page;
            let getData;
            const gotService = new GOTService();

            switch (page) {
                case "books": getData = gotService.getAllBooks;
                    break;
                case "chars": getData = gotService.getAllCharacters;
                    break;
                case "houses": getData = gotService.getAllHouses;
                    break;
                    default: break;
            }

            console.log(page, getData)


            return <View itemId={this.props.itemId} getData={getData} />

        }
    }
}

export default f(LinkItem);