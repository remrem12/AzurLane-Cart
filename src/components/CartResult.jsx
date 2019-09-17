import React, { Component } from 'react'

export default class CartResult extends Component {

    showTotalAmount = cart => {
        var total = 0;
        if(cart.length > 0){
            for(let i = 0; i < cart.length; i++){
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

    render() {
        var { cart } = this.props
        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Total Amount</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>
                            { this.showTotalAmount(cart) }
                            <img src="https://cdn140.picsart.com/300279712119211.png?r240x240" 
                                className="cube" alt="cube"/>
                        </strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                            <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        )
    }
}
