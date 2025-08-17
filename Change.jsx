import  { Component } from 'react'

 class Change extends Component {
    constructor(){
        super()
    }
    state={
     
        internal:{
        backgroundColor: "black",
        width:"100px",
        height:"100px"
        }
       
    }
    change=()=>{
       this.setState((prevState) => ({
      internal: {
        ...prevState.internal, 
        backgroundColor:
        prevState.internal.backgroundColor === "black" ? "red" : "black",
      },
    }));
  };
    
  render() {
    return (
       <div>
      <div style={this.state.internal}>
      </div>
      <div>
      <button onClick={this.change}>click magic happen</button>
      </div>
      </div>
    )
  }
}

export default Change
