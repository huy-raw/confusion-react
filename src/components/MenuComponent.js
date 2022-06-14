import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import DishDetail from './DetailComponent';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
    }//end constructor   

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (<div></div>);
    }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg with="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <>
                    {
                        this.state.selectedDish != null ?
                            (
                                <div className="row">
                                    <DishDetail dish={this.state.selectedDish} comments={this.state.selectedDish.comments}></DishDetail>
                                </div>
                            ) :
                            (
                                <></>
                            )
                    }
                </>
            </div>
        )

    }
}

export default Menu