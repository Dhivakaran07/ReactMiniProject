// Currency Converter

// Input an amount in one currency and convert it to another using exchange rates.

// Add a dropdown to select currencies.
import { Component } from 'react'

class Currency extends Component {
    state={
        Result:"",
        input:""
    }
    targets=(e)=>{
        this.setState({input:e.target.value})
    }
    dollar=()=>{
        const value = Number(this.state.input); 
        this.setState({Result:value/80+"$"})
    }
    dirham=()=>{
        const value = Number(this.state.input); 
        this.setState({Result:value*0.5+"D"})
    }
    eruo=()=>{
        const value=Number(this.state.input)
        this.setState({Result:value*0.0098+"Eur"})
    }
     history = () => {
  const value = this.state.input;
  if (value && value.length > 0) {
    this.setState((prevState) => ({
      history: [...prevState.history, value+","]  
    }));
  }
}
    render() {
        return (
            <div>
                <h2>Currency Convertor</h2>
                <input type='number' placeholder="enter the Currency" onChange={this.targets}/>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={this.dollar}>Dollar</a></li>
                        <li><a className="dropdown-item" href="#"  onClick={this.dirham}>Dirham</a></li>
                        <li><a className="dropdown-item" href="#" onClick={this.eruo}>Euro</a></li>
                        
                    </ul>
                    <button onClick={this.history}>History</button>
                    <h5>{this.state.history}</h5>
                </div>
                <h2>{this.state.Result}</h2>
            </div>
        )
    }
}

export default Currency


