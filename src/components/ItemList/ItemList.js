import React from 'react';
import './ItemList.css';
import  {Item}  from '../Item/Item';

export const ItemList = ({data = []}) => {
  return (
    data.map(product => <Item key={product.id} info={product} />)
  )
}

export default ItemList;