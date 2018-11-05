import React, { Component } from 'react';

class Card extends Component {
  render() {
    let styles = {
      position: 'absolute',
      transform: `rotate(${this.props.random}deg)`
    };
    return (
      <img src={this.props.imageUrl} alt={this.props.imageUrl} style={styles} />
    );
  }
}

export default Card;
