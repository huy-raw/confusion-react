import React from 'react'


export default class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: "red",
            year: 1964
        }
    };
    changeColor = () => {
        this.setState({ color: blue });
    };
    start = (e) => {
        alert('your car are ready by' + e.type);
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}
                </p>
                <button
                    type="button" onClick={this.changeColor}>
                    Change Color
                </button>
                <button
                type="button" onClick={this.start}> Start
                </button>
            </div>
        );
    }

}