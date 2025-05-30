import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle from '../../Components/Assets/circle.png';
import cross from '../../Components/Assets/cross.png';

let data = ["","","","","","","","",""];

const TicTacToe = () => {
  let [count,setcount] = useState(0);
  let [lock,setLock] = useState(false);
  let titlRef  = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2,box3, box4,box5,box6,box7,box8,box9];

  const toggle = (e, num) => {
    if (lock) return;
  
    let newCount = count + 1;
  
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}' alt="cross" />`;
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src='${circle}' alt="circle" />`;
      data[num] = "O";
    }
  
    setcount(newCount); 
    checkWin();
  };

  const checkWin = () => {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6]           // diagonals
    ];
  
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") {
        won(data[a]);
        return;
      }
    }
  
    // 👉 Draw condition: no winner AND no empty cells
    if (data.every(cell => cell !== "")) {
      setLock(true);
      titlRef.current.innerHTML = `It's a <span>Draw!</span>`;
    }
  };
  

  const won = (winner) =>{
    setLock(true);
    if(winner==="X"){
      titlRef.current.innerHTML = `Congratulations : <img src='${cross}' alt="cross" /> Won.`
    }
    else{
      titlRef.current.innerHTML = `Congratulations : <img src='${circle}' alt="cross" /> Won.`
    }
  }

  const reset = () =>{
    setLock(false);
    data = ["","","","","","","","",""];
    titlRef.current.innerHTML = `Tic Tac Toe <span> Game</span>`;
    boxArray.forEach((e) => {
      e.current.innerHTML = "";
    });    
  }

  return (
    <div className='container'>
        <h1 className="title" ref={titlRef}>Tic Tac Toe <span> Game</span></h1>
        <div className="board">

          <div className="row1">
            <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes"  ref={box2}onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes"  ref={box3}onClick={(e)=>{toggle(e,2)}}></div>
          </div>

          <div className="row2">
            <div className="boxes"  ref={box4}onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes"  ref={box5}onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes"  ref={box6}onClick={(e)=>{toggle(e,5)}}></div>
          </div>

          <div className="row3">
            <div className="boxes"  ref={box7}onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes"  ref={box8}onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes"  ref={box9}onClick={(e)=>{toggle(e,8)}}></div>
          </div>

        </div>
        <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe;
