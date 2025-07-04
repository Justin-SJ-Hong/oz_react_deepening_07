import { useState, useEffect } from "react";
import './Clock.css'
/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const [time, setTime] = useState(new Date());
  const [running, setRunning] = useState(true);

  const handleClockToggle = () => {
    setRunning(!running);
  }

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const tenHours = (date) => {
    const tenHours = String(Math.floor(date.getHours() / 10));
    return tenHours;
  }
  
  const oneHour = (date) => {
    const oneHour = String(date.getHours() % 10);
    return oneHour;
  }

  const tenMinutes = (date) => {
    const tenMinutes = String(Math.floor(date.getMinutes() / 10));
    return tenMinutes;
  }

  const oneMinute = (date) => {
    const oneMinute = String(date.getMinutes() % 10);
    return oneMinute;
  }

  const tenSeconds = (date) => {
    const tenSeconds = String(Math.floor(date.getSeconds() / 10));
    return tenSeconds
  }

  const oneSecond = (date) => {
    const oneSecond = String(date.getSeconds() % 10);
    return oneSecond
  }

  return (
    <>
      <div className="frame">
        <h1>My Timer</h1>
        <div className="timer-container">
          <p className="number">{tenHours(time)}</p>
          <p className="number">{oneHour(time)}</p>
          <p>:</p>
          <p className="number">{tenMinutes(time)}</p>
          <p className="number">{oneMinute(time)}</p>
          <p>:</p>
          <p className="number">{tenSeconds(time)}</p>
          <p className="number">{oneSecond(time)}</p>
        </div>
        <button
          className="show-clock"
          onClick={handleClockToggle}
        >
          {running ? (<p className='stop'>타이머 정지</p>) : (<p className='start'>타이머 시작</p>)}
        </button>
      </div>
    </>
  );
}

export default Clock;
