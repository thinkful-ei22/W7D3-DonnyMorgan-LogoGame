import React from 'react';

export default function Logo(props){

    const logoUrl = props.currentLogo.url;
    return(
       
        <img src={logoUrl} className="logoImg" />

    );
}