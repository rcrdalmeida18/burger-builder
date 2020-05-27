import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},
]

const buildcontrols = (props) => {
    const ingredientsControl = controls.map((control, index) => {
        return (<BuildControl 
            key={control.label + index} 
            label={control.label} 
            add={props.addIngredients.bind(this,control.type)}
            remove={props.removeIngredients.bind(this, control.type)}
            disabledInfo={props.disabledInfo[control.type]}
            />);
    })

    return (
        <div className={classes.BuildControls}>
            <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            {ingredientsControl}
            <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>Order now!</button>
        </div>
    );
};

buildcontrols.propTypes = {
    addIngredients: PropTypes.func,
    removeIngredients: PropTypes.func,
    disabledInfo: PropTypes.object,
    purchaseable: PropTypes.bool,
    ordered: PropTypes.func,
    price: PropTypes.number,
}

export default buildcontrols;