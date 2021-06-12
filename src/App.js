
import React, { Component, Fragment } from 'react'
import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color:"red",
      size:"20",
      makebox:false
         
    }

    this.boxstyle ={
      color:this.state.color
    }
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  

  }


  handleChangeSize(event) {
    this.setState({size: event.target.value});
  }
  handleChangeColor(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.color);
    this.setState({size: event.target.value});

    event.preventDefault();
  }


  render() {
    return (
      <Fragment>
      <div className='form-container'>
      <h1>
          Create a Box !
      </h1>

      <form onSubmit={this.handleSubmit} >
    
    
          <div className="from-group">
          <label htmlFor="email">Size</label>
          <input type='text'  placeholder="enter size in number, default 20" size={this.state.size} onChange={this.handleChangeSize} required />
    
          </div>
    
          <div className="from-group">
          <label htmlFor="password">Color</label>
        
        <select color={this.state.color} onChange={this.handleChangeColor}>
          <option value="red">RED</option>
           <option value="blue">BLUE</option>
           <option value="yellow">YELLOW</option>
           <option value="pink">PINK</option>
           <option value="black">BLACK</option>
           <option value="white">WHITE</option>
           <option value="grey">GREY</option>
           <option value="green">GREEN</option>
      </select>
    
          </div>


    
    
    
       
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      
    
     
      { <div style={{backgroundColor:this.state.color,height:this.state.size+"px", width:this.state.size+"px"}}> 
      im a box
      </div> }
 
      
      </div>
      </Fragment>
    )
  }
}
