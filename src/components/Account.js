
import React from 'react';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Van',
            balance: 1000
        };
        //   this.withdraw = this.withdraw.bind(this);
    }
    // withdraw() {
    //     this.setState({balance: 900});
    // }
    withdraw = () => {
        if(this.state.balance > 0 ){
            this.setState({ balance: this.state.balance - 100})
        }else {
            this.setState({ msg: 'het tien roi'})
        }      
    }
    render() {
        return (
            <div>
                <h2>name: {this.state.name}</h2>
                <h2>balance: {this.state.balance}</h2>
                <button onClick={this.withdraw}>click me</button>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}

export default Account