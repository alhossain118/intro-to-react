import React, { Component } from 'react';
// equal to --> const Component = React.Component;

// const Searchbar = () => {
//   return <input />
// }

//Class component --> internal record keeping,
class Searchbar extends Component { // declares a class with name Searchbar
  constructor(props) {
    super(props);

    this.state = {term: "" }
  }
  // only class based components have states

    // extends React.Component --> gives all functionality from React libaray
    //class based must have a render method
    // Value of the input: {this.state.term}
    render() {

      return (
        <div>
      <input
      value = {this.state.term}
      onChange={event => this.setState({ term: event.target.value})} />
      </div>
  )
}

    // onInputChange(event) {
    //   console.log(event.target.value);
    // }

}



export default Searchbar;