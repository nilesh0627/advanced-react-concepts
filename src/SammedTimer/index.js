import React, { useEffect } from 'react'
import { getRemainingTime, arrayRotate } from './utils'
import './styles.scss'
import ShowTimer from './ShowTimer';

function Timer({ finishTimer }) {

    const { days, hours, minutes, seconds } = getRemainingTime(finishTimer);
    console.log(' days', days, ' hours', hours, ' minutes', minutes, ' seconds', seconds)

    let _minutes_tens;
    let _minutes_ones;
    let _seconds_tens;
    let _seconds_ones;

    const minutesTensArray = [5, 4, 3, 2, 1, 0];
    const minutesOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const secondsTensArray = [5, 4, 3, 2, 1, 0];
    const secondsOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    const minutesTensDigit = Math.floor(minutes / 10);
    const minutesOnesDigit = minutes % 10;
    const secondsTensDigit = Math.floor(seconds / 10);
    const secondsOnesDigit = seconds % 10;

    console.log(minutesTensDigit, minutesOnesDigit, secondsTensDigit, secondsOnesDigit);

    const timeNow = Date.now();
    // const minutesTensList = arrayRotate(minutesTensArray, 5 - minutesTensDigit).map(number => {
    //     return <span key={`minutesTensList-${timeNow + number}`} className="digit">{number}</span>;
    // })

    const minutesTensList = minutesTensArray.map(number => {
        return <span key={`minutesTensList-${timeNow + number}`} className="digit">{number}</span>;
    })

    const minutesOnesList = minutesOnesArray.map(number => {
        return <span key={`minutesOnesList-${timeNow + number}`} className="digit">{number}</span>;
    })

    const secondsTensList = secondsTensArray.map(number => {
        return <span key={`secondsTensList-${timeNow + number}`} className="digit">{number}</span>;
    })

    const secondsOnesList = secondsOnesArray.map(number => {
        return <span key={`secondsOnesList-${timeNow + number}`} className="digit">{number}</span>;
    })

    useEffect(() => {
        _minutes_tens.style.animationDelay = `${minutes * 60 + seconds - 3599}s`;
        _minutes_ones.style.animationDelay = `${minutesOnesDigit * 60 + seconds - 599}s`;
        _seconds_tens.style.animationDelay = `${seconds - 59}s`;
        _seconds_ones.style.animationDelay = `${secondsOnesDigit - 9}s`;
    }, [])

    console.log('rendering');
    return (
        <div className='wrapper'>
            <div className='time-part-wrapper'>
                <div className='time-part minutes tens'>
                    <div ref={(el) => {
                        _minutes_tens = el;
                    }} className='digit-wrapper'>
                        {minutesTensList}
                    </div>
                </div>
                <div className='time-part minutes ones'>
                    <div ref={(el) => {
                        _minutes_ones = el;
                    }} className='digit-wrapper'>
                        {minutesOnesList}
                    </div>
                </div>
            </div>
            <div className='time-part-wrapper'>
                <div className='time-part seconds tens'>
                    <div ref={(el) => {
                        _seconds_tens = el;
                    }} className='digit-wrapper'>
                        {secondsTensList}
                    </div>
                </div>
                <div className='time-part seconds ones'>
                    <div ref={(el) => {
                        _seconds_ones = el;
                    }} className='digit-wrapper'>
                        {secondsOnesList}
                    </div>
                </div>
            </div>
        </div>
    )
}


Timer.defaultProps = {
    finishTimer: new Date('April 9, 2022 12:48:40').getTime()
}
export default Timer
