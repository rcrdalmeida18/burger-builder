import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const ingredientPrices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 1.0
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        disabledInfo: {
            salad: true,
            bacon: true,
            cheese: true,
            meat: true,
        }
    }

    addIngredientHandler = (type) => {
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients,
                    [type]: state.ingredients[type] + 1
                },
                totalPrice: state.totalPrice + ingredientPrices[type],
                disabledInfo: {
                    ...state.disabledInfo,
                    [type]: state.ingredients[type] + 1 <= 0
                },
            }
        });
    }

    removeIngredientHandler = (type) => {
        this.setState((state) => ({
            ingredients: {
                ...state.ingredients,
                [type]: state.ingredients[type] === 0 ? 0 : state.ingredients[type] - 1
            },
            disabledInfo: {
                ...state.disabledInfo,
                [type]: state.ingredients[type] - 1 <= 0
            },
            totalPrice: state.totalPrice - ingredientPrices[type],
        }));
    }

    render() {
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} addIngredients={this.addIngredientHandler} removeIngredients={this.removeIngredientHandler} disabledInfo={this.state.disabledInfo}/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;