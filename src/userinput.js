import React from 'react';

export default function Userinput(props){


    return (
        <form id="guessForm"  onSubmit = {e => {  
            e.preventDefault();
           
        }}>
             <input onChange= {e => { props.handleGuess(e.target.value) }} type="text" placeholder="Enter your guess..."/>
        
        </form>

    );
}