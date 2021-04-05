import React from "react";
import classNames from "../utils/class-names";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function DisplayProgress({timerSettings}){
const {
        currentlyActive,
        focusTime,
        breakTime,
        focusSeconds,
        breakSeconds,
        onBreak,
        isTimerRunning
      } = timerSettings;

  const currentValue = !onBreak ? ((focusTime * 60 - focusSeconds) / (focusTime * 60)) * 100  : ((breakTime * 60 - breakSeconds) / (breakTime * 60)) * 100;

return(
    currentlyActive &&(
    <div>
    <div className="row mb-2">
      <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */
        !onBreak ? (<h2 data-testid="session-title">Focusing for {minutesToDuration(focusTime)} minutes</h2>) : 
        (<h2 data-testid="session-title"> On Break for {minutesToDuration(breakTime)} minutes</h2>)}

        {/* TODO: Update message below to include time remaining in the current session */
        !onBreak ? (<p className="lead" data-testid="session-sub-title">{secondsToDuration(focusSeconds)} remaining
        </p>) : <p className="lead" data-testid="session-sub-title">{secondsToDuration(breakSeconds)}</p>}

        {/*Update message below to display "Paused" when the timer is paused*/
        isTimerRunning ? null : <h2>Paused</h2>
        }
      </div>
    </div>
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={currentValue} // TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${currentValue}` }} // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  </div>
    )

)

}

export default DisplayProgress;