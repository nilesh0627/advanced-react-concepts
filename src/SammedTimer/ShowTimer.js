import React from 'react'

function ShowTimer({ minutesTensList, minutesOnesList, secondsTensList, secondsOnesList }) {
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

export default ShowTimer