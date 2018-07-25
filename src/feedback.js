import React from 'react';

export default function Feedback(props){

    const currentGuess = props.currentGuess.toLowerCase();
    let displayMessage = '';
    let styles ={};

    if(currentGuess === props.correctName.toLowerCase() ){

        displayMessage= 'Congratulations! You Won!';
        styles= {
            color: 'green',
            fontSize:'20px'
        }
    } else {

        displayMessage= 'Try Again!';
        styles= {
            color: 'red',
            fontSize:'20px'
        }
    }

    if(currentGuess === ""){
        displayMessage="";
    }


    return(
        <div>
          <p style={styles}> {displayMessage}</p>
          <button onClick={() => props.nextLogo()}>Next</button>
        </div>
    );

}