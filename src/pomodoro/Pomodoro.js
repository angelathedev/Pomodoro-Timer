import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Buttons from "./Buttons";
import DisplayProgress from "./DisplayProgress";
import Timer from "./Timer";

function Pomodoro() {
  //Initial timer settings
  const initialTimerSettings = {
  focusSeconds: 1500,
  breakSeconds: 300, 
  focusTime: 25, 
  breakTime: 5,
  currentlyActive: false,
  onBreak: false, 
  isTimerRunning: false,
  };

  const [timerSettings, setTimerSettings] = useState({...initialTimerSettings});

  //Initialize the initial timer settings
  const {
    focusSeconds,
    breakSeconds,
    focusTime,
    breakTime,
    isTimerRunning,
    onBreak
  } = timerSettings;

  useInterval(
    () => {
    const timerRunning = !onBreak ? focusSeconds : breakSeconds;
    //Checks to see if the timer has reached 0, resets the timer, and plays audio for breakTime
    if(timerRunning === 0){
      setTimerSettings({
        ...timerSettings, 
        focusSeconds: focusTime * 60,
        breakSeconds: breakTime * 60,
        onBreak: !onBreak
      });
      new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
    }

    //Counts down the timer in seconds by 1 for focus time
    else if (timerRunning > 0 && !onBreak){
      setTimerSettings({
        ...timerSettings, 
        focusSeconds: focusSeconds - 1
      })
    }
    //Counts down the timer in seconds by 1 for break time
    else if(timerRunning > 0 && onBreak){
      setTimerSettings({
        ...timerSettings, 
        breakSeconds: breakSeconds - 1
      })
    }
    },
    isTimerRunning ? 1000 : null 
  );

  return (
    <div className="pomodoro">
      <DisplayProgress timerSettings = {timerSettings}/>

      <Timer 
        timerSettings = {timerSettings}
        setTimerSettings = {setTimerSettings}
      />
    
      <Buttons
        timerSettings = {timerSettings}
        initialTimerSettings = {initialTimerSettings}
        setTimerSettings = {setTimerSettings}
      />
    </div>
  );
}

       

export default Pomodoro;
