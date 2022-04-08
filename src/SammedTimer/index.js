import React, { useEffect } from 'react'
import { getRemainingTime, arrayRotate } from './utils'
import './styles.scss'
import ShowTimer from './ShowTimer';


function Timer({ finishTimer }) {
    const minutesTensArray = [5, 4, 3, 2, 1, 0];
    const minutesOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const secondsTensArray = [5, 4, 3, 2, 1, 0];
    const secondsOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const { days, hours, minutes, seconds } = getRemainingTime(finishTimer);
    console.log({ minutes, seconds })
    const minutesTensDigit = Math.floor(minutes / 10);
    const minutesOnesDigit = minutes % 10;

    const secondsTensDigit = Math.floor(seconds / 10);

    const secondsOnesDigit = seconds % 10;

    const minutesTensList = arrayRotate(minutesTensArray, 5 - minutesTensDigit).map(number => {
        return (<span className="digit" key={number}>{number}</span>);
    })


    const minutesOnesList = arrayRotate(minutesOnesArray, 9 - minutesOnesDigit).map(number => {

        return <span className="digit" key={number}>{number}</span>;

    })

    const secondsTensList = arrayRotate(secondsTensArray, 5 - secondsTensDigit).map(number => {
        return <span className="digit" key={number}>{number}</span>;
    })

    const secondsOnesList = arrayRotate(secondsOnesArray, 9 - secondsOnesDigit).map(number => {

        return <span className="digit" key={number}>{number}</span>;

    })


    return (
        <ShowTimer minutesTensList={minutesTensList}
            minutesOnesList={minutesOnesList} secondsTensList={secondsTensList}
            secondsOnesList={secondsOnesList} />
    )
}


Timer.defaultProps = {
    finishTimer: new Date('April 9, 2022 12:55:40').getTime()
}
export default Timer
