import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.css'

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
            <p>Your total is: <strong>{props.total} €</strong></p>
            <p>Checkout?</p>
            <Button type="Danger" click={props.cancel}>Cancel</Button>
            <Button type="Success" click={props.continue}>Continue</Button>
        </Auxiliary>
    )
}

export default orderSummary;