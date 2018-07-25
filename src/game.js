import React from 'react';
import Logo from './logo';
import Userinput from './userinput';
import Scramble from './scramble';
import Feedback from './feedback';

export default class Game extends React.Component{

    constructor(props){
        super(props);

        //grabs random logo data object from json
        const logoData = this.props.logoData;
        const randomLogo = logoData[Math.floor(Math.random() * logoData.length)];
        console.log("random Object" + Math.floor(Math.random() * logoData.length));

        //generate scrambled word
        const scrambler = function(){
            let word = randomLogo.name;
            const wordLength = word.length;
            let scrambled = "";
    
            for (let i = 0; i < wordLength; i++){
                let charIndex = Math.floor(Math.random()*word.length);
                scrambled  += word.charAt(charIndex);
                // console.log("let i" + i);
                // console.log("charIndex"+charIndex);
                // console.log('scrambled' +" "+ scrambled);
                word = word.substr(0,charIndex) + word.substr(charIndex +1);
            }
    
            return  scrambled;
        }  

        const scrambledWord = scrambler();

        console.log('Our initial scrambled word' + scrambledWord);


        this.state={
           currentLogo:{
               url: randomLogo.url,
               name: randomLogo.name
           },
          currentGuess:'',
          currentScramble: scrambledWord
        }
    }

       

   render(){
    return(

        <div className="container">
            <Logo currentLogo = {this.state.currentLogo}  />
            <Scramble  currentScramble = {this.state.currentScramble} />
            <Userinput handleGuess={currentGuess => this.setState({currentGuess})}/>
            <Feedback currentGuess={this.state.currentGuess} correctName={this.state.currentLogo.name}/>
            
        </div>

    );

   }


}