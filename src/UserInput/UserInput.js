import React from 'react';

const userInput = (props) => {
    
    const inlineCss = {
        color: 'blue',
        border: '2px solid black'
      };

    return (
        <input type="text"
               style={inlineCss}
               onChange={props.changed} 
               value={props.value}/>
    )
};

export default userInput;