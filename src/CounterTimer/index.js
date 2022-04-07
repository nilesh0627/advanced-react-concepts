import React, { useState, useEffect } from 'react'
import Days from './Days'
import Timer from './Timer'
import { getRemainingTime } from './getRamainingTime'
const CountDownTimer = ({ finishTimer }) => {

    const [days, setDays]=useState('')

	useEffect(() => {
        const { days, hours, minutes, seconds } = getRemainingTime(finishTimer)
        setDays(days)
        if(days > 0){
            const diff1=(hours*60*60 + minutes*60 + seconds)*1000+500
            console.log(diff1)
            const id=setTimeout(()=>{
                const { days } = getRemainingTime(finishTimer)
                setDays(days)
            }, diff1 )
            return ()=>clearTimeout(id)
        }
	}, []);


	return (
		<div className="app">
			{
                days > 0 ? <Days days={days} /> : <Timer finishTimer={finishTimer}/>
            }
		</div>
	)
}

CountDownTimer.defaultProps={
    finishTimer:new Date('April 7, 2022 10:35:40').getTime()
}

export default CountDownTimer;
