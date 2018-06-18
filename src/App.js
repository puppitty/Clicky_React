import React, { Component } from "react";
import BirdCard from "./components/BirdCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import birds from "./birds.json";
import "./App.css";

let clickedBirds = [], currentScore = 0, highScore = 0
class App extends Component {
  state = {
    birds: birds,
    currentScore: 0,
    highScore: 0
  }

  //Reset the Game if a Clicked Character is clicked again!!
  restartGame = () => {
    clickedBirds = []
    // Reset current Score
    currentScore = 0
    if (this.state.currentScore > highScore)
      highScore = this.state.currentScore

    this.setState({
      currentScore: currentScore,
      highScore: highScore
    })
    return
  }

  //Shuffle the cards when an Character Card is clicked 
  shuffleBirds = () => {

    this.setState({
      birds: this.state.birds.sort(function (a, b) { return 0.5 - Math.random() })
    })

  }


  imgClick = (id) => {

    //use the id of the Character Card to save his name into Clicked Friends
    const clickedBird = this.state.birds.filter((bird) => (bird.id === id))
    this.shuffleBirds()

    //If the current clicked Character Card was previously clicked then reset game
    if (clickedBirds.indexOf(clickedBird[0].name) !== -1) {
      this.restartGame()
      console.log(clickedBirds)
    } else
    //if the Character Card is clicked for first time,
    //save his name in clickedFriends array, increase score, update state with the score
    {
      clickedBirds.push(clickedBird[0].name)

      if (currentScore === 0) {
        highScore = this.state.highScore
      }

      currentScore++

      console.log(currentScore)
      this.setState({
        currentScore: currentScore,
        highScore: highScore
      })
      console.log(clickedBirds)

    }

  }

  render() {
    return (

      <Wrapper >
        <Nav currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Title />
        {this.state.birds.map((bird) => (
          <BirdCard
            imgClick={() => this.imgClick(bird.id)}
            key={bird.id}
            id={bird.id}
            name={bird.name}
            image={bird.image}
          />
        ))}

      </Wrapper>)
  }
}

export default App;