import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        },
        purchaseable: false,
        purchasing: false,
    }

    addIngredientHandler = (type) => {
        var ingredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        };
        this.setState({
            ingredients,
            totalPrice: this.state.totalPrice + ingredientPrices[type],
            disabledInfo: {
                ...this.state.disabledInfo,
                [type]: this.state.ingredients[type] + 1 <= 0
            }
        });
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {
        var ingredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] === 0 ? 0 : this.state.ingredients[type] - 1
        }

        this.setState({
            ingredients,
            disabledInfo: {
                ...this.state.disabledInfo,
                [type]: this.state.ingredients[type] - 1 <= 0
            },
            totalPrice: this.state.totalPrice - ingredientPrices[type],
        });
        this.updatePurchaseState(ingredients);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => ingredients[key]).reduce((acc, el) => acc + el, 0);

        this.setState({purchaseable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState((state) => ({purchasing: !state.purchasing}));
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    checkoutHandler = () => {
        console.log('Bon apetit!');
    }

    render() {
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} click={this.purchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients} cancel={this.cancelPurchaseHandler} continue={this.checkoutHandler} total={this.state.totalPrice.toFixed(2)}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ordered={this.purchaseHandler} purchaseable={this.state.purchaseable} price={this.state.totalPrice} addIngredients={this.addIngredientHandler} removeIngredients={this.removeIngredientHandler} disabledInfo={this.state.disabledInfo}/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;