import React, { Component } from 'react';
import './itemList.css';
import GOTService from '../../services/GOTService';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

    state = {
        charList: null
    }

    service = new GOTService();

    componentDidMount() {
        const charAr = this.service.getAllCharacters();
        charAr.then(charList => this.setState({ charList }));
    }

    componentDidUpdate() {
    }

    renderList(arr) {
        return arr.map((item, index) => {
            return (
                <>
                    <li 
                    key={index} 
                    className="list-group-item"
                    onClick={()=>this.props.onCharSelected(index)}
                    >
                        {item.name}
                    </li>
                </>
            )
        }

        )

    }

    render() {
        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }
        const items = this.renderList(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}