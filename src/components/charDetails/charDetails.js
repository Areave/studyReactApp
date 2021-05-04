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

        this.props.getData()
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


        const char = this.state.selectedChar;
        const { name } = char;
       

        const fieldAr = [];

        for(let key in char ) {
            fieldAr.push(<Field key={char[key]} field={char[key]} label={key}/>);
        }

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {fieldAr}
                    {/* {React.Children.map(this.props.children, (child) => React.cloneElement(child, {char}))} */}
                </ul>
            </div>
        );
    }
}