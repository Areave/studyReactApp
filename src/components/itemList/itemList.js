import React, { Component } from 'react';
import './itemList.css';
import GOTService from '../../services/GOTService';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    gotService = new GOTService();

    componentDidMount() {
        let  {getData} = this.props;
        const itemAr = getData();

        itemAr.then(itemList => this.setState({ itemList }));
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
                    onClick={()=>this.props.onItemSelected(index)}
                    >
                        {this.props.renderItem(item)}
                    </li>
                </>
            )
        }

        )

    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }
        const items = this.renderList(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}