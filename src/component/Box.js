import React from 'react'

export const Box = (props) => {

    let result;

    if(props.title === "COM" && !(props.result === "Tie") && !(props.result === "")){
        if(props.result === "Win"){
            result = "Lose";
        }else{
            result = "Win";
        }
    }
    else{
        result = props.result;
    }

  return (
    <div>
        <div className={`box ${result}`}>
            <h1 className = "title">{props.title}</h1>
            <img className = "item-img" src = {props.item && props.item.img} alt=""/>
            <h2 className = "result">{result}</h2>
        </div>
    </div>
  )
}
