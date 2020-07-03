import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import ContactData from './ContactData/Contactadata';



class Checkout extends Component{
    // state = {
    //     ingredients: null,
    //     price:0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if(param[0]==='price'){
    //             price=param[1];
    //         }else{
    //             ingredients[param[0]] = +param[1];
    //         }
            
            
    //     }
    //     this.setState({ingredients:ingredients,totalPrice: price});
    // }



    checkoutCancelhandler= ()=>{
        this.props.history.goBack();
    }
    checkoutContineHandler= ()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    
    render(){
        let summary = <Redirect to="/"/>

        // console.log(this.props.ings);
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/>: null;
            console.log(this.props);
            summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCanceled={this.checkoutCancelhandler}
                    checkoutContinued={this.checkoutContineHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>
            </div>
            );
        }
        return summary;
    }
}
             


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased:state.order.purchased
    }
};



export default connect(mapStateToProps)(Checkout);