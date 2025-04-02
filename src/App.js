/*
  2025년 04월 01일
  작성자: 유지형
  프로젝트: 가위바위보 게임
  내용: 유저와 컴퓨터가 가위바위보 게임을 할 수 있는 간단한 웹사이트

  1. 박스 2개(타이틀, 사진, 결과값)
  2. 가위 바위 보 버튼
  3. 버튼 클릭 시 클릭한 값이 박스에 보임.
  4. 컴퓨터는 랜덤하게 아이템 선택.
  5. 유저와 컴퓨터의 아이템 값을 보고 승패를 가름.
  6. 승패 결과에 따라 색이 바뀜 (이김-초록, 짐-빨간, 비김-검은색 or 회색)


*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";


import { Box } from './component/Box';
import './App.css';
import { useState } from 'react';

// 유저 초이스 객체
const choice = {
  scissor:{
    name: "Scissor",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165828.png?uid=R58920829&ga=GA1.1.1368280802.1743474763"
  },
  rock:{
    name: "Rock",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165813.png?uid=R58920829&ga=GA1.1.1368280802.1743474763"
  },
  paper:{
    name: "Paper",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165920.png?uid=R58920829&ga=GA1.1.1368280802.1743474763"
  }
}

function App() {

  // State
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // 게임 플레이 함수
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  // 컴퓨터 초이스 결정 랜덤 함수
  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // Object.keys(): 객체의 키값만 뽑아 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  // 게임 승패 결과 함수
  const judgement = (user, com) => {
    
    if(user.name === com.name){
      return "Tie";

    }else if(user.name === "Scissor"){
      return com.name === "Paper" ? "Win" : "Lose";

    }else if(user.name === "Rock"){
      return com.name === "Scissor" ? "Win" : "Lose";

    }else if(user.name === "Paper"){
      return com.name === "Rock" ? "Win" : "Lose";
    }
  }

  return (
    <div className = "container">

    <div className = "main">
        <Box title = "YOU" item = {userSelect} result = {result}/>
        <Box title = "COM" item = {computerSelect} result = {result}/>
      </div>
      
      <h1 className = "choose">Choose one!</h1>
      <div className = "buttons">
        <button className = "btn-sci" onClick = {() => play("scissor")}>
          <FontAwesomeIcon icon={faHandScissors} />
        </button>
        <button className = "btn" onClick = {() => play("rock")}>
          <FontAwesomeIcon icon={faHandFist} />
        </button>
        <button className = "btn" onClick = {() => play("paper")}>
        <FontAwesomeIcon icon={faHand} />
        </button>
      </div>

    </div>
  );
}

export default App;
