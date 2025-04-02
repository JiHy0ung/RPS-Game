import React from 'react'

export const Box = (props) => {

    let result;

    if(props.title === "COM" && !(props.result === "Tie") && !(props.result === "")){
        if(props.result === "Win"){
            result = "Lose";
        }else if(props.result === "Lose"){
            result = "Win";
        }
    }
    else{
        result = props.result;
    }

    let img = props.item ? props.item.img : "https://cdn-icons-png.freepik.com/512/6793/6793710.png?uid=R58920829&ga=GA1.1.1368280802.1743474763"

  return (
    <div>
        <div className={`box ${result}`}>
            <h1 className = "title">{props.title}</h1>
            <img className = "item-img" src = {img} alt=""/>
            <h2 className = "result">승패: { result}</h2>
        </div>
    </div>
  )
}
