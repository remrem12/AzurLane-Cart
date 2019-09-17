import * as types from '../constants/ActionType';


var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CARD:
            index = findProductInCart(state, product)
            if(index !== -1){
                state[index].quantity += quantity
            }
            else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case types.DELETE:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        
        case types.UPDATE:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;   //action.quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    for(let i = 0; i < cart.length; i++){
        if(cart[i].product.id === product.id)
        return i;
    }
    return -1;
}

export default cart;