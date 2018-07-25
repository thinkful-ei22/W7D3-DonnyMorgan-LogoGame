import React from 'react';

export default function Feedback(props){

    const currentGuess = props.currentGuess.toLowerCase();
    let displayMessage = '';

    if(currentGuess === props.correctName.toLowerCase() ){

        displayMessage= 'Congratulations! You Won!';
    } else {

        displayMessage= 'Try Again!';
    }

    return(

            <p> {displayMessage}</p>

    );

}