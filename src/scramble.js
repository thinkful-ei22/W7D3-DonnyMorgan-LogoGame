import React from 'react';

export default function Scramble(props){

    let word = props.currentLogo.name;
    const wordLength = word.length;
    let scrambled = "";

    for (let i = 0; i < wordLength; i++){
        let charIndex = Math.floor(Math.random()*word.length);
        scrambled  += word.charAt(charIndex);
        console.log("let i" + i);
        console.log("charIndex"+charIndex);
        console.log('scrambled' +" "+ scrambled);
        word = word.substr(0,charIndex) + word.substr(charIndex +1);
    }




    return(

            <p> {scrambled.toLowerCase()} </p>

    );

}