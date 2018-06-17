import React, { Component } from "react";
import BirdCard from "./components/BirdCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import birds from "./birds.json";
import "./App.css";

class App extends Component {
  // Setting this.state.birds to the birds json array
  state = {
    birds
  };

  removeBird = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const birds = this.state.birds.filter(bird => bird.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ birds });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Bird List</Title>
        {this.state.birds.map(bird => (
          <BirdCard
            removeBird={this.removeBird}
            id={bird.id}
            key={bird.id}
            name={bird.name}
            image={bird.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
