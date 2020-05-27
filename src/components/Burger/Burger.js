import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let receivedIngredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        })
    }).reduce((acc, el) => {
        return acc.concat(el)
    }, []);
    console.log(receivedIngredients)

    if ( !receivedIngredients.length ) receivedIngredients = <p>Add some cheese!</p>

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {receivedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}

export default burger;