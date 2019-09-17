import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actRemoveProduct, actChangeMSG, actUpdateProductInCart } from '../actions';


class CartContainer extends Component {

    showCartItem = cart => {
        var result = <tr><td>{ Message.MSG_EMPTY }</td></tr>
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return(
                    <CartItem
                        key = { index }
                        item = { item }
                        onDelete = { this.props.onDelete }
                        onChangeMSG = { this.props.onChangeMSG }
                        onUpdateProductInCart = { this.props.onUpdateProductInCart }
                    />
                )
            })
        }
        return result;
    }

    showCartResult = cart => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = { cart }/>
        }
        return result;
    }

        

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showCartResult(cart) }
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            rarity: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart    // trong reducer index
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDelete: (product) => {
            dispatch(actRemoveProduct(product))
        },
        onChangeMSG: (message) => {
            dispatch(actChangeMSG(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);