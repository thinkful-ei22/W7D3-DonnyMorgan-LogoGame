import React from 'react';

export default function Feedback(props){

    const currentGuess = props.currentGuess.toLowerCase();
    let displayMessage = '';
    let styles ={};
    let display={};

    if(currentGuess === props.correctName.toLowerCase() ){

        displayMessage= 'Congratulations! You Won! 🍔';
        styles= {
            color: 'green',
            fontSize:'20px'
        };
        display={
            display:'inline'
        }
    } else {

        displayMessage= 'Try Again!';
        styles= {
            color: 'red',
            fontSize:'20px'
        };
        display={
            display:'none'
        }
    }

    if(currentGuess === ""){
        displayMessage="";
        display={
            display:'none'
        }
    }


    return(
        <div>
          <p style={styles}> {displayMessage}</p>
          <button style={display} onClick={() => props.nextLogo()}>Next</button>
        </div>
    );

}