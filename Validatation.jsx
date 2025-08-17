import { Component } from 'react';

export class Validation extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    phone: "",
    nameErr: "",
    emailErr: "",
    phnoErr: "",
    valid:"👍"
  };

  eventhandler = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3) {
      this.setState({ nameErr: "Name must be at least 3 characters" });
    } else {
      this.setState({ nameErr: "" });
    }
     if (this.state.phone.length  !==10) {
      this.setState({ phnoErr: "enter a exact number only" });
    } else {
      this.setState({ phnoErr: "" });
    }
     if (!this.state.email.includes('@')) {
      this.setState({ emailErr: "enter a exact number Email" });
    } else {
      this.setState({ EmailErr: "" })
    }
  }
  render() {
    let sty={
      internal:{
        color:'red'
      }
    }
    return (
      <div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
        <form className="d-flex flex-column " onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={/^[a-zA-Z]{6,}$/.test(this.state.name)
                  ? this.state.name.replace(/✅/g, "").trim() + " ✅"
                  : this.state.name.replace(/✅/g, "").trim()
              }
            name="name"
            placeholder="Enter your name"
            onChange={this.eventhandler}
          /><br></br>
           {this.state.nameErr && <p  style={sty.internal}>{this.state.nameErr}</p>} 
          <input 
            type="text"
            value={
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(this.state.email)
                  ? this.state.email.replace(/✅/g, "").trim() + " ✅"
                  : this.state.email.replace(/✅/g, "").trim()
              }
            name="email"
            placeholder="Enter your Email"
            onChange={this.eventhandler}
          />
          <br />
            {this.state.emailErr && <p  style={sty.internal}>{this.state.emailErr}</p>} 
          <input
            type="tel"
            value={
              /^[0-9]{10,}$/.test(this.state.phone)?this.state.phone.replace(/👍/g,"").trim()+"👍":this.state.phone
            }
            name="phone"
            placeholder="Enter your phone number"
            onChange={this.eventhandler}
          />
          <br />
            {this.state.phnoErr && <p style={sty.internal}>{this.state.phnoErr}</p>} 
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
      
        </form>
      </div>

    );
      
  }
}

export default Validation;
