import * as types from '../constants/actionTypes';

export const onProducts = () => {
  return {
    type  : types.PRODUCTS
  }
}

export const addToCart = (product,quantity) => {
  return {
    type : types.ADD_TO_CART,
    product,
    quantity
  }
}

export const quantity = (product,number) => {
  return {
    type : types.QUANTITY,
    product,
    number
  }
}

export const cancel = (product) => {
  return {
    type : types.CANCEL,
    product
  }
}

export const pay = () => {
  return {
    type  :types.PAY
  }
}

export const iventory = (product,quantity) => {
  return {
    type : types.IVENTORY,
    product,
    quantity
  }
}