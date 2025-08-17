import { Component } from 'react';

export class PropsTask extends Component {
  render() {
    let style = { color: "" };

    if (this.props.status === "success") {
      style.color = "green";
    } else if (this.props.status === "warning") {
      style.color = "yellow";
    } else if (this.props.status === "error") {
      style.color = "red";
    } else {
      style.color = "gray"; 
    }

    return (
      <div>
        <h2 style={style}>Status: {this.props.status}</h2>
      </div>
    );
  }
}

export default PropsTask;
