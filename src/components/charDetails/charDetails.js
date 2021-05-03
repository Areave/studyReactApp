import React, { Component } from 'react';
import './charDetails.css';
import GOTService from '../../services/GOTService';
import Spinner from '../spinner/spinner';
import Field from '../field/field';


export default class CharDetails extends Component {

    service = new GOTService();
    state = { selectedChar: null }

    componentDidMount() {
        this.updateChar(this.props.selectedID);
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.selectedID;
        const curId = this.props.selectedID;
        if (prevId !== curId) {
            this.updateChar(curId);
        }
    }

    updateChar(id) {
        if (!id) { return };

        this.props.setData()
            .then(arr => arr[id])
            .then(selectedChar => {
                this.setState({ selectedChar })
            })

    }

    render() {

        const { selectedChar } = this.state;

        if (!selectedChar) {
            console.log("spinner")
            return (
                <>
                    <div className="char-details rounded">
                        <div>Choose element for info</div>
                    </div>
                </>
            )
        }

        const { name } = this.state.selectedChar;
        

        // const keys = Object.keys(this.state.selectedChar);
        // const fields = keys.map((item, index) => (
        //     <Field item={keys} field={index} label={item} />
        // ))

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {selectedChar}
                </ul>
            </div>
        );
    }
}