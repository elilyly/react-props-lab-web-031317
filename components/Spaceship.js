import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
        </div>
    )
  }
}
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};



export default Spaceship;
