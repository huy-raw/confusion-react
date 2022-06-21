import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import dateFormat from "dateformat";


// class DishDetail extends React.Component {
//     render() {
//         if (this.props.dish != null) {
//             const comment = this.props.dish.comments.map((item) => {
//                 return (
//                     <div>
//                         <p>{item.comment}</p>
//                         <p>{item.author}, {item.date}</p>
//                     </div>
//                 )
//             });

//             const dish = this.props.dish;
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-sm-5">
//                             <Card>
//                                 <CardImg top src={dish.image} alt={dish.name} />
//                                 <CardBody>
//                                     <CardTitle>{dish.name}</CardTitle>
//                                     <CardText>{dish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                         <div>
//                             <div className="col-12 col-sm-7">
//                                 <h2>comment</h2> {comment}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             return (<div></div>);
//         }
//     }
// }


function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <div className="col-12 col-sm-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        )
    } else return (<div></div>);
}


function RenderComments({ comments }) {

    const comment = comments.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.comment}</p>
                <p>-- {item.author}, {dateFormat(item.date, "fullDate")}</p>
            </div>
        )
    });

    return (
        <div className="col-12 col-sm-5 text-left">
            <h2>Comment</h2> {comment}
        </div>
    )
}


const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">

                    <RenderDish dish={props.dish}></RenderDish>
                    <RenderComments comments={props.dish.comments}></RenderComments>

                </div>
            </div>
        )
    }
    return <></>
}

export default DishDetail;