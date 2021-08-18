import React, {Component, useState} from "react";
import '../styles/App.css';
// import Slide from './Slide';

const App = (props) => {
  let {slides}=props;
  const [slideNum,setSlideNum]=useState(0);
    
  let handleNext=()=>{
    setSlideNum(slideNum+1);
  }
  let handlePrev=()=>{
    setSlideNum(slideNum-1);
  }
  let handleReset=()=>{
    setSlideNum(0);
  }
  
  return (
    <>
      <button onClick={handleReset} disabled={slideNum===0?true:false} data-testid="button-restart">Reset</button>
      <button onClick={handlePrev} disabled={slideNum===0?true:false} data-testid="button-prev">Prev</button>
      <button onClick={handleNext} disabled={slideNum===slides.length-1?true:false} data-testid="button-next">Next</button>
      {/* <Slide slideData={slides[slideNum]}/> */}
      <h1 data-testid="title">{slides[slideNum].title}</h1>
      <p data-testid="text">{slides[slideNum].text}</p>
    </>
  )
}


export default App;
