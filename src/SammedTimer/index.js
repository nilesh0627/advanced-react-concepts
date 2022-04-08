import React, { useEffect } from 'react'
import { getRemainingTime } from './utils'
import './styles.scss'
import ShowTimer from './ShowTimer';

function Timer({ finishTimer }) {

    const { days, hours, minutes, seconds } = getRemainingTime(finishTimer);
    console.log(' hours', hours, ' minutes', minutes, ' seconds', seconds)
    let _hours_tens;
    let _hours_ones;
    let _minutes_tens;
    let _minutes_ones;
    let _seconds_tens;
    let _seconds_ones;

    const hoursTensArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const hoursOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const minutesTensArray = [5, 4, 3, 2, 1, 0];
    const minutesOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const secondsTensArray = [5, 4, 3, 2, 1, 0];
    const secondsOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    const hoursTensDigit = Math.floor(hours / 10);
    const hoursOnesDigit = hours % 10;
    const minutesTensDigit = Math.floor(minutes / 10);
    const minutesOnesDigit = minutes % 10;
    const secondsTensDigit = Math.floor(seconds / 10);
    const secondsOnesDigit = seconds % 10;

    // console.log(minutesTensDigit, minutesOnesDigit, secondsTensDigit, secondsOnesDigit);

    const timeNow = Date.now();
    // const minutesTensList = arrayRotate(minutesTensArray, 5 - minutesTensDigit).map(number => {
    //     return <span key={`minutesTensList-${timeNow + number}`} className="digit">{number}</span>;
    // })

    const hoursTensList = hoursTensArray.map(number => {
        return <span key={`hoursTensList-${timeNow + number}`} className="digit">{number}</span>;
    })

    const hoursOnesList = hoursOnesArray.map(number => {
        return <span key={`hoursOnesList-${timeNow + number}`} className="digit">{number}</span>;
    })

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
        _hours_tens.style.animationDelay = `${hours * 60 * 60 + minutes * 60 + seconds - 359999}s`;
        _hours_ones.style.animationDelay = `${hoursOnesDigit * 60 * 60 + minutes * 60 + seconds - 35999}s`;
        _minutes_tens.style.animationDelay = `${minutes * 60 + seconds - 3599}s`;
        _minutes_ones.style.animationDelay = `${minutesOnesDigit * 60 + seconds - 599}s`;
        _seconds_tens.style.animationDelay = `${seconds - 59}s`;
        _seconds_ones.style.animationDelay = `${secondsOnesDigit - 9}s`;
    }, [])

    console.log('rendering');
    return (
        <div className='wrapper'>
            <div className='time-part-wrapper'>
                <div className='time-part hours tens'>
                    <div ref={(el) => {
                        _hours_tens = el;
                    }} className='digit-wrapper'>
                        {hoursTensList}
                    </div>
                </div>
                <div className='time-part hours ones'>
                    <div ref={(el) => {
                        _hours_ones = el;
                    }} className='digit-wrapper'>
                        {hoursOnesList}
                    </div>
                </div>
            </div>
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
    finishTimer: new Date('April 9, 2022 14:37:30').getTime()
}
export default Timer
