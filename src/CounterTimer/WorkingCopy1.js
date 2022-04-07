import React, { useState, useEffect } from 'react'
import Days from './Days'
import Timer from './Timer'

const CountDownTimer = ({ finishTimer }) => {

    const [days,setDays]=useState('')
    const [hours,setHours]=useState('')
    const [minutes,setMinutes]=useState('')
    const [seconds,setSeconds]=useState('')

	const getTimeRemaining = (finishTimer) => {
        console.log('In Timer Function')
		const remainingTime = (finishTimer - new Date().getTime())/1000;
		const seconds = Math.floor((remainingTime) % 60);
        const minutes = Math.floor((remainingTime / 60) % 60);
        const hours = Math.floor((remainingTime / (60 * 60)) % 24);
        const days = Math.floor(remainingTime / (60 * 60 * 24));
		return {
			days, hours, minutes, seconds
		};
	}


	const startTimer = (finishTimer) => {
		let { days, hours, minutes, seconds } = getTimeRemaining(finishTimer);
        setDays(days > 9 ? days : '0' + days)
		setHours(hours > 9 ? hours : '0' + hours)
		setMinutes(minutes > 9 ? minutes : '0' + minutes)
		setSeconds(seconds > 9 ? seconds : '0' + seconds)
	}

	useEffect(() => {
        const id = setInterval(() => {
			startTimer(finishTimer);
		}, 1000)
        return ()=> clearInterval(id)
	}, []);


	return (
		<div className="App">
			{
                days > 0 ? <Days days={days} /> : <Timer hours={hours} minutes={minutes} seconds={seconds}/>
            }
		</div>
	)
}

CountDownTimer.defaultProps={
    finishTimer:new Date('April 2, 2022 16:34:30').getTime()
}

export default CountDownTimer;
