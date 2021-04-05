import React from "react";
import { minutesToDuration } from "../utils/duration";
import Pomodoro from "./Pomodoro";
import classNames from "../utils/class-names";

function Timer({timerSettings, setTimerSettings}){
    const {
        focusTime,
        breakTime,
        focusSeconds,
        breakSeconds,
        currentlyActive,
      } = timerSettings;

return (
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusTime)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => {
                    setTimerSettings({
                        ...timerSettings, 
                        focusTime: Math.min(
                            Math.max(parseInt(focusTime - 5), 5),
                            60
                          ),
                          focusSeconds: Math.min(
                            Math.max(parseInt(focusSeconds - 300), 300),
                            3600
                          )
                    })
                }}
                disabled={currentlyActive}>
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={() => {
                    setTimerSettings({
                      ...timerSettings,
                      focusTime: Math.min(
                        Math.max(parseInt(focusTime + 5), 5),
                        60
                      ),
                      focusSeconds: Math.min(
                        Math.max(parseInt(focusSeconds + 300), 300),
                        3600
                      ),
                    });
                  }
                }
                  disabled={currentlyActive}    
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakTime)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => {
                    setTimerSettings({
                        ...timerSettings,
                        breakTime: Math.min(
                          Math.max(parseInt(breakTime - 1), 1),
                          15
                        ),
                        breakSeconds: Math.min(
                          Math.max(parseInt(breakSeconds - 60), 60),
                          900
                        ),
                      });
                  }}
                  disabled = {currentlyActive}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => {
                    setTimerSettings({
                      ...timerSettings,
                      breakTime: Math.min(
                        Math.max(parseInt(breakTime + 1), 1),
                        15
                      ),
                      breakSeconds: Math.min(
                        Math.max(parseInt(breakSeconds + 60), 60),
                        900
                      ),
                    });
                  }}
                  disabled={currentlyActive}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
)
                }

export default Timer;