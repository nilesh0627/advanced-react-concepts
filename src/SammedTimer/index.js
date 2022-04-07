import React from 'react'
import { getRemainingTime, arrayRotate } from './utils'
import './styles.scss'

const minutesTensArray = [5, 4, 3, 2, 1, 0];
const minutesOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const secondsTensArray = [5, 4, 3, 2, 1, 0];
const secondsOnesArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function Timer({ finishTimer }) {
    const { days, hours, minutes, seconds } = getRemainingTime(finishTimer);

    const minutesTensDigit = minutes / 10;

    const minutesOnesDigit = minutes % 10;

    const secondsTensDigit = seconds / 10;

    const secondsOnesDigit = seconds % 10;

    const minutesTensList = arrayRotate(minutesTensArray, 5 - minutesTensDigit).map(number => {
        return <span className="digit">{number}</span>;
    })

    const minutesOnesList = arrayRotate(minutesOnesArray, 9 - minutesOnesDigit).map(number => {

        return <span className="digit">{number}</span>;

    })

    const secondsTensList = arrayRotate(secondsTensArray, 5 - secondsTensDigit).map(number => {
        return <span className="digit">{number}</span>;
    })

    const secondsOnesList = arrayRotate(secondsOnesArray, 9 - secondsOnesDigit).map(number => {

        return <span className="digit">{number}</span>;

    })


    return (
        <div className='wrapper'>
            <div className='time-part-wrapper'>
                <div className='time-part minutes tens'>
                    <div className='digit-wrapper'>
                        {minutesTensList}
                    </div>
                </div>
                <div className='time-part minutes ones'>
                    <div className='digit-wrapper'>
                        {minutesOnesList}
                    </div>
                </div>
            </div>
            <div className='time-part-wrapper'>
                <div className='time-part seconds tens'>
                    <div className='digit-wrapper'>
                        {secondsTensList}
                    </div>
                </div>
                <div className='time-part seconds ones'>
                    <div className='digit-wrapper'>
                        {secondsOnesList}
                    </div>
                </div>
            </div>
        </div>
    )
}


Timer.defaultProps = {
    finishTimer: new Date('April 9, 2022 10:35:40').getTime()
}
export default Timer
