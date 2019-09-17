import React, { Component } from 'react'
import * as Message from '../constants/Message'
export default class Product extends Component {

    showRarity = rarity => {
        let star = rarity - 3;
        let result = [];
        for(let i = 0; i < star; i++){
            result.push(<i key = {i} className="fa fa-star" />);
        }
        for(let j = star; j < rarity; j++){
            result.push(<i key = {j} className="fa fa-star-o"/>);
        }
        return result;
    }

    onAddToCart = (product, event) => {
        event.preventDefault();
        this.props.onAddToCart(product);
        this.props.onChangeMSG(Message.MSG_ADD);
    }
    
    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1" style={{height: 320 + 'px'}}>
                        <img src = { product.imageUrl } className="img-fluid" alt= { product.name } />
                        <a href = '/'>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href = '/'>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                { this.showRarity(product.rarity) }
                            </li>
                        </ul>
                        <p className="card-text">
                            { product.des }
                        </p>
                        <div className="card-footer">
                            <span className="left">
                                { product.price }
                                <img src="https://cdn140.picsart.com/300279712119211.png?r240x240" 
                                    className="cube" alt="cube"
                                />
                            </span>
                            <span className="right">
                                <a  href = '/'
                                    onClick = { (event) => this.onAddToCart(product, event) }
                                    className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
