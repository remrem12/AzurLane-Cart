import React, { Component } from 'react'
import * as Message from '../constants/Message'


export default class CartItem extends Component {

    render() {
        var { item } = this.props;
        var { quantity } = item
        return (
            <tr>
                <th scope="row">
                    <img src = { item.product.imageUrl } alt = 'imageUrl'/>
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>
                    {item.product.price}
                    <img src="https://cdn140.picsart.com/300279712119211.png?r240x240" 
                        className="cube" alt="cube"
                    />
                </td>
                <td className="center-on-small-only">
                <span className="qty">{ quantity } </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label  className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                        onClick = { () => this.onUpdateQuantity(item.product, item.quantity - 1) }
                    >
                    <a href = '/'>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                        onClick = { () => this.onUpdateQuantity(item.product, item.quantity + 1) }
                    >
                    <a href = '/'>+</a>
                    </label>
                </div>
                </td>
                <td>
                    { item.product.price * item.quantity }
                    <img src="https://cdn140.picsart.com/300279712119211.png?r240x240" 
                        className="cube" alt="cube"
                    />
                </td>
                <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" data-placement="top" 
                    data-original-title="Remove item"
                    onClick = { () => this.onDelete(item.product) }
                >
                    X
                </button>
                </td>
            </tr>
        )
    }

    onDelete = product => {
        this.props.onDelete(product);
        this.props.onChangeMSG(Message.MSG_DELETE);
    }

    onUpdateQuantity = (product, newQuantity) => {
        if(newQuantity > 0){
            
            this.props.onUpdateProductInCart(product, newQuantity)
            this.props.onChangeMSG(Message.MSG_UPDATE)
        }
    }

}
