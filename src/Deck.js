import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardObjects: [],
      deckArr: []
    };

    this.draw = this.draw.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
    );
    console.log(response.data.cards);
    this.setState(st => {
      st.deckArr = response.data.cards;
    });
  }

  draw() {
    let deck = this.state.deckArr;
    let random = Math.floor(Math.random() * 360);
    let currentDeck = this.state.activeCardObjects;
    let newCard = {
      image: deck[deck.length - 1].image,
      random: random
    };

    this.setState(st => ({
      activeCardObjects: [...currentDeck, newCard],
      deckArr: st.deckArr.slice(0, st.deckArr.length - 1)
    }));
  }

  render() {
    let cardComponents = this.state.activeCardObjects.map(cardObj => (
      <Card imageUrl={cardObj.image} random={cardObj.random} />
    ));

    return (
      <div>
        <button onClick={this.draw}>Gimme card</button>
        {cardComponents}
      </div>
    );
  }
}

export default Deck;
