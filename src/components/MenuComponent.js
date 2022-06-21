import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent"
import React, { useState } from 'react';

function RenderMenuItem({ dish, onClick }) {
    return (
        <div className="col-12 col-md-5 m-1" onClick={() => onClick(dish.id)}  >
            <Card >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}


const Menu = (props) => {
    const [selectedDish, setSelectedDish] = useState(null);
    const handleShowDetail = (dish)=>{
        setSelectedDish(dish)
    }
    const menu = props.dishes.map(dish => {
        return (
            <RenderMenuItem key={dish.id} dish={dish} onClick={()=>handleShowDetail(dish)} ></RenderMenuItem>
        )
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
            <DishDetail dish={selectedDish}></DishDetail>
        </>

    )
}


export default Menu;