// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleKeypad() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handleKeypad}></input>
        </div>
    )
}

export default Keypad;