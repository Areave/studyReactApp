import React, { Component } from 'react';
import GOTService from "../../services/GOTService"
import TemplatePage from '../templatePage/templatePage';



export default class BookPage extends Component {

    gotService = new GOTService();

    render() {
        return <TemplatePage
        getData={this.gotService.getAllBooks}
        renderItem={({ name, numberOfPages }) => (<> <span>{name + ', ' + numberOfPages}</span></>)}
        />
    }

    }
