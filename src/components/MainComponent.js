import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
// import About from './AboutComponent';
import { Routes, Route, Navigate , useParams } from 'react-router-dom';
import { Component } from 'react';
import { DISHES } from '../shared/dish2';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    HomePage = () => {
   
        return (
            <Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
            />
        )
    }
    DishWithId = () => {
        let { dishId } = useParams();
        return (
            <DishDetail
                dish={this.state.dishes.filter(dish => dish.id=== parseInt(dishId,10))[0]}
                comments={this.state.comments.filter(comment => comment.dishId=== parseInt(dishId,10))}
            />
        )
    }

    render() {
 
        return (

            <>
                <Header />
                <Routes>
                    <Route path='/home' element={<this.HomePage />} ></Route>
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />}></Route>
                    <Route exact path='/menu/:dishId' element={<this.DishWithId />}></Route>
                    <Route exact path='/contactus' element={<Contact />}></Route>
                    {/* <Route exact path='/aboutus' element={<About leaders={this.state.leaders}/>}></Route> */}
                    <Route path="*" element={<Navigate to="/menu" />} />
                </Routes>

                <Footer />
            </>

        );
    }
}

export default Main;