import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        const types = {
            'bread-bottom': () => {
                ingredient = <div className={classes.BreadBottom}></div>
            },
            'bread-top': () => {
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
            },
            'meat': () => {
                ingredient = <div className={classes.Meat}></div>
            },
            'cheese': () => {
                ingredient = <div className={classes.Cheese}></div>
            },
            'salad': () => {
                ingredient = <div className={classes.Salad}></div>
            },
            'bacon': () => {
                ingredient = <div className={classes.Bacon}></div>
            }
        }
    
        if (types.hasOwnProperty(this.props.type)) {
            types[this.props.type]();
        }
    
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient;