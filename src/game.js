import React from 'react';
import Logo from './logo';
import Userinput from './userinput';
import Scramble from './scramble';
import Feedback from './feedback';
import logoData from './logo-data';
console.log('LOGO DATA:', logoData);

export default class Game extends React.Component{

    constructor(props){
        super(props);

        //grabs random logo data object from json
        //const logoData = this.props.logoData;
       const randomLogo = logoData[Math.floor(Math.random() * logoData.length)];


        console.log("random Object" + Math.floor(Math.random() * logoData.length));

        //generate scrambled word
        let word = randomLogo.name;
        const wordLength = word.length;
        let scrambled = "";

        for (let i = 0; i < wordLength; i++){
            let charIndex = Math.floor(Math.random()*word.length);
            scrambled  += word.charAt(charIndex);
            word = word.substr(0,charIndex) + word.substr(charIndex +1);
        }

        //this.nextLogo = this.nextLogo.bind(this); (substitute for arrow function in Line 45)


        this.state={
           currentLogo:{
               url: randomLogo.url,
               name: randomLogo.name
           },
          currentGuess:'',
          currentScramble: scrambled
        }
    } 

 

    nextLogo = () => {
      //const logoData = this.props.logoData;
        let randomLogo;
      do{ 
        randomLogo = logoData[Math.floor(Math.random() * logoData.length)];
       } while (randomLogo ===this.state.currentLogo );   

      let word = randomLogo.name;
      const wordLength = word.length;
      let scrambled = "";

      for (let i = 0; i < wordLength; i++){
          let charIndex = Math.floor(Math.random()*word.length);
          scrambled  += word.charAt(charIndex);
          word = word.substr(0,charIndex) + word.substr(charIndex +1);
      }
      document.getElementById("guessForm").reset();
      console.log('randomLOGO.name', randomLogo.name);
      this.setState({
        currentLogo:{
          url: randomLogo.url,
          name: randomLogo.name
        },
        currentGuess:'',
        currentScramble: scrambled
      });
      
    }


   render(){
    return(

        <div className="container">
            <Logo currentLogo = {this.state.currentLogo}  />
            <Scramble  currentScramble = {this.state.currentScramble} />
            <Userinput handleGuess={currentGuess => this.setState({currentGuess})}/>
            <Feedback currentGuess={this.state.currentGuess} correctName={this.state.currentLogo.name} nextLogo={this.nextLogo}/>
        </div>

    );

   }


}