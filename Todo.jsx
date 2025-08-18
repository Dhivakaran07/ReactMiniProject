import { Component } from 'react'

export class Todo extends Component {
  state = {
    Taskes: [],
    finished: "",
    inputvalue: ""
  }

  handlechange = (e) => {
    this.setState({ inputvalue: e.target.value })
  }

  handlechek = () => {
     if(!this.state.inputvalue){
        this.setState({finished:" warning:without Entering value does not add"})
        return
    }
    if (this.state.Taskes.includes(this.state.inputvalue)) {
      this.setState({ finished: "completed" })
     
    } else {
      this.setState({ finished: "not completed" })
    }
  }

 handleadd=()=>{
    if(!this.state.inputvalue){
        this.setState({finished:" warning:enter any task!"})
        return
    }
    if(this.state.Taskes.unshift(this.state.inputvalue))
    { this.setState({finished:"added"}, ) } }

  handleDel = () => {
     if(!this.state.inputvalue){
        this.setState({finished:" warning:without entering value does not delete"})
        return
    }
    this.setState(prevState => ({
      Taskes: prevState.Taskes.filter(task => task !== prevState.inputvalue),
      finished: "deleted"
    }))
  }

  render() {
    return (
      <div>
        <label>Enter the task you completed:</label>
        <input 
          type="text"
          value={this.state.inputvalue}
          onChange={this.handlechange}
        /><br />

        <h2 style={{color:this.state.finished.includes("warning")?"red":"green"}}>{this.state.finished}</h2>
        <button onClick={this.handlechek}>Check</button>
        <button onClick={this.handleadd}>Add Task</button>
        <button onClick={this.handleDel}>Delete Task</button>

       <h2>{this.state.Taskes}</h2>
      </div>
    )
  }
}

export default Todo
