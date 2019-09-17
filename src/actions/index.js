import * as types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CARD,
        product,
        quantity
    }
}

export const actChangeMSG = message => {
    return{
        type: types.CHANGE_MSG,
        message
    }
}

export const actRemoveProduct = product => {
    return {
        type: types.DELETE,
        product
    }
}

export const actUpdateProductInCart = (product, quantity ) =>{
    return{
        type: types.UPDATE,
        product,
        quantity
    }
} 