import React, { Component } from "react";
import "./style.css";
import Contador from './components/contador';
import Users from './components/users';

class App extends Component{
  constructor(...props){
    super(...props);
    this.state = {
      quantity: 0
    }
  }
  handleAdd = () => {
    this.setState({
      quantity: this.state.quantity+1
    })
  }
  handleDelete = () => {
    this.setState({
      quantity: this.state.quantity-1 < 0 ? 0 : this.state.quantity-1
    })
  }
  render(){
    const { quantity } = this.state;
    const rows = [];
    for(let i=0; i<quantity; i++){
      rows.push(<Users key={i} />)
    }
    console.log(rows)
    return(
      <div>
        <Contador
         quantity={quantity}
         handleAdd={this.handleAdd}
         handleDelete={this.handleDelete}
        />
        <h1>{ quantity }</h1>
        { rows }
      </div>
    )
  }
}

export default App;
