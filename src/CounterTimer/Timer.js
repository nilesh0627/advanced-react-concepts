import React, { useState, useEffect, useRef } from 'react'
import { getRemainingTime } from './getRamainingTime'
import gsap from "gsap";


const Timer = ({ finishTimer }) => {

    const [hours,setHours]=useState('')
    const [minutes,setMinutes]=useState('')
    const [seconds,setSeconds]=useState('')

	const sec1=useRef(null)

	const startTimer = (finishTimer) => {
        const {hours, minutes, seconds} = getRemainingTime(finishTimer)
		setHours(hours > 9 ? hours : '0' + hours)
		setMinutes(minutes > 9 ? minutes : '0' + minutes)
		sec1.current=seconds
		setSeconds(seconds > 9 ? seconds : '0' + seconds)
	}

	useEffect(() => {
            const id = setInterval(() => {
                startTimer(finishTimer);
            }, 1000)
            return ()=> clearInterval(id)
	}, []);


	return (
		<h2 className="timer">
			{hours} : {minutes} : <span className='child'>{seconds}</span>
		</h2>
	)
}


export default Timer;
