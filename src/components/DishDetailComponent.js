import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";


function RenderDish({ dish }) {
    if (dish)
        return (

            <Card>
                <CardImg top src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        )
}


const RenderComments = ({ comments }) => {

    if (comments != null) {
        const comment = comments.map((item) => {
            const { id, comment, author, date } = item
            return (
                <div key={id}>
                    <p>{comment}</p>
                    <p>{author} | {dateFormat(date, "fullDate")}</p>
                </div>
            )
        })
        return (
            <>
                <h2>Comments</h2>
                {comment}
            </>
        )
    }
    return <></>
}

const DishDetail = (props) => {
    if (props.dish != null) {
        const dish = props.dish;
        const comments = props.comments;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>
        )
    }

}

export default DishDetail