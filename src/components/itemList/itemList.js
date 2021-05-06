import React, { useState, useEffect } from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';



function ItemList({ getData, onItemSelected, renderItem }) {

    const [itemList, updateList] = useState([])

    useEffect(() => {
        getData().then(data => updateList(data));
    }, [])

    function renderList(arr) {
        return arr.map((item, index) => {
            return (
                <>
                    <li
                        key={index}
                        className="list-group-item"
                        onClick={() => onItemSelected(index)}
                    >
                        {renderItem(item)}
                    </li>
                </>
            )
        }

        )

    }

    if (!itemList) {
        return <Spinner />
    }

    const items = renderList(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

}

export default ItemList;


// export default class ItemList extends Component {

//     state = {
//         itemList: null
//     }

//     gotService = new GOTService();

//     componentDidMount() {
//         let  {getData} = this.props;
//         const itemAr = getData();

//         itemAr.then(itemList => this.setState({ itemList }));
//     }

//     componentDidUpdate() {
//     }

//     renderList(arr) {
//         return arr.map((item, index) => {
//             return (
//                 <>
//                     <li 
//                     key={index} 
//                     className="list-group-item"
//                     onClick={()=>this.props.onItemSelected(index)}
//                     >
//                         {this.props.renderItem(item)}
//                     </li>
//                 </>
//             )
//         }

//         )

//     }

//     render() {
//         const { itemList } = this.state;

//         if (!itemList) {
//             return <Spinner />
//         }
//         const items = this.renderList(itemList);
//         return (
//             <ul className="item-list list-group">
//                 {items}
//             </ul>
//         );
//     }
// }

