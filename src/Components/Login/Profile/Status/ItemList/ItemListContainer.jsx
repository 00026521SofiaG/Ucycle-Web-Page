import React from 'react';
import Status from '../Status'

export const ItemListContainer = () => {

    const onAdd = (quantity) => {
        console.log(` Podrias comprar esto: ${quantity} ¿estas seguro?`) ;
    }

    return (

        <>

            <Status initial={0} stock= {100} onAdd={onAdd} />

        </>
    )
};

export default ItemListContainer;