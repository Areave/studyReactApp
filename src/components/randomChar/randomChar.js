import React, { Component } from 'react';
import './randomChar.css';
import { Button } from 'reactstrap';
import GOTService from '../../services/GOTService';
import Spinner from '../spinner/spinner';

export default class RandomChar extends Component {


    state = {
        char: {},
        loaded: true,
        show: true
    }

    gotService = new GOTService();

    componentDidMount() {
        console.log("!!!!!!!!Mounting")
        this.updatePers();
        // this.interval = setInterval(this.updatePers, 7000);
    }

    onCharLoaded = (char) => {
        this.setState({ char, loaded: false })
    }

    onError() {
    }

    hideBlock = () => {
        this.setState(({ show }) => ({ show: !show }));
    }

    updatePers = () => {
        this.setState({ loaded: true })
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacterById(id)
            .then(char => {
                if (this.gotService.checkChar(char)) {
                    this.onCharLoaded(char);
                }
                else (this.updatePers());
            })
            .catch(this.onError);
    }


    render() {
        // clearInterval(this.interval);
        const { loaded } = this.state;
        const elements = loaded ? <Spinner /> : <Block state={this.state} />;

        return (
            <>
                { elements}
                <Button onClick={this.hideBlock} color="secondary" size="lg" block>Block level button</Button>
            </>
        );
    }





}



class Block extends Component {

    constructor(props) {
        super(props);
        this.char = props.state.char;
    }

    render() {
        if (!this.props.state.show) {
            return null;
        }

        const { name, gender, born, died, culture } = this.char;


        return (
            <>
                <div className="random-block rounded">
                    <h4>Random Character: {name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Gender </span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Born </span>
                            <span>{born}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Died </span>
                            <span>{died}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Culture </span>
                            <span>{culture}</span>
                        </li>
                    </ul>
                </div>
            </>
        );



    }
}




