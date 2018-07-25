import React from 'react';
import Logo from './logo';
import Userinput from './userinput';
import Scramble from './scramble';
import Feedback from './feedback';

export default class Game extends React.Component{

    constructor(props){
        super(props);

        this.state={
           currentLogo:{
               url: 'https://res.cloudinary.com/moodimagescloud/image/upload/v1532532364/Logos/1024px-React-icon.svg.png',
               name: 'React'
           },
          currentGuess:'',
         // currentScramble: this.scrambler()
        }
    }

    // scrambler(){
    //     let word = this.state.currentLogo.name;
    //     const wordLength = word.length;
    //     let scrambled = "";

    //     for (let i = 0; i < wordLength; i++){
    //         let charIndex = Math.floor(Math.random()*word.length);
    //         scrambled  += word.charAt(charIndex);
    //         console.log("let i" + i);
    //         console.log("charIndex"+charIndex);
    //         console.log('scrambled' +" "+ scrambled);
    //         word = word.substr(0,charIndex) + word.substr(charIndex +1);
    //     }

    //     return  scrambled;
    // }       

   render(){
    return(

        <div className="container">
            <Logo currentLogo = {this.state.currentLogo}  />
            <Scramble  currentLogo = {this.state.currentLogo} />
            <Userinput handleGuess={currentGuess => this.setState({currentGuess})}/>
            <Feedback currentGuess={this.state.currentGuess} correctName={this.state.currentLogo.name}/>
            
        </div>

    );

   }


}