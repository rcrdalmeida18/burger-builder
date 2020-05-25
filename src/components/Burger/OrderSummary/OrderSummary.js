import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((key, index) => (
        <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
    ));

    return (
        <Auxiliary>
            <h3>Order:</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Checkout?</p>
        </Auxiliary>
    )
}

export default orderSummary;