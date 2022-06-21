import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Component } from 'react';
import { DISHES } from '../shared/dish';
 export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dish: DISHES,
            // selectedDish: null
        }
    }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} ></Route>
                    <Route exact path='/menu' element={<Menu dishes={this.state.dish}    />}></Route>
                    <Route path="*" element={<Navigate to="/menu" />} />
                </Routes>

                <Footer />
            </>

        );
    }
}
