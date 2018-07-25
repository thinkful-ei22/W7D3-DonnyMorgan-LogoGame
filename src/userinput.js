import React from 'react';

export default function Userinput(props){


    return (
        <form>
             <input type="text" onChange={e => props.handleGuess(e.target.value)}/>
        </form>



    );
}