import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: true
    }

    closeDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((state) => ({showSideDrawer: !state.showSideDrawer}));
    }

    render() {
        return (
        <Auxiliary>
            <Toolbar toggleClick={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.closeDrawerHandler}/>
            <main className={classes.Content}>
                { this.props.children }
            </main>
        </Auxiliary>
    );
    }
    
} 

export default Layout;