import React, { Component } from 'react';
import GOTService from "../../services/GOTService"
import TemplatePage from '../templatePage/templatePage';



export default class CharacterPage extends Component {

    gotService = new GOTService();

    render() {

        console.log('return from charpage')
        return <TemplatePage
            getData={this.gotService.getAllCharacters}
            renderItem={({ name, gender }) => (name + ", " + gender)}
        />
    }

    }
