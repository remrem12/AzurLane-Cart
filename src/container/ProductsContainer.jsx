import React, { Component } from 'react'
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMSG } from '../actions/index';


class ProductsContainer extends Component {

    showProducts = products => {
        var result = null;
        
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                            key = { index }
                            product = { product }
                            onAddToCart = { this.props.onAddToCart }
                            onChangeMSG = { this.props.onChangeMSG }
                        />
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;
        // len store lay di lieu ve do vao Products
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
            
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            rarity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}



const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMSG: (message) => {
            dispatch(actChangeMSG(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);