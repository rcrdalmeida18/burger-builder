import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} click={this.props.click}></Backdrop>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
    
}

export default Modal;