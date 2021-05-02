import React, { Component } from 'react';
import './charDetails.css';
import GOTService from '../../services/GOTService';
import Spinner from '../spinner/spinner';

export default class CharDetails extends Component {

    service = new GOTService();
    state = { selectedChar: null }

    componentDidMount() {
        console.log('comp mount start')
        this.updateChar(this.props.selectedID);
        console.log('comp mount end')
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.selectedID;
        const curId = this.props.selectedID;
        if (prevId !== curId) {
            this.updateChar(curId);
        }
        console.log('char details update, state slected Char is null?', this.state.selectedChar===null)
    }

    updateChar(id) {
        
        console.log('update via selected id', id);
        if (!id) {return};

        console.log('another selected id! its', id)
        this.service.getAllCharacters()
            .then(arr => arr[id])
            .then(selectedChar => {
                this.setState({ selectedChar })
            })

    }



    render() {

        console.log("char details rendder");

        const { selectedChar } = this.state;

        if (!selectedChar) {
            console.log("spinner")
            return <Spinner />
        }

        const { name, gender, born, died, culture } = this.state.selectedChar;
        console.log(name);

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}