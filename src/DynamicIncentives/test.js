import React, { useEffect, useRef, useState } from 'react'
import IncentiveList from './IncentiveList';
import data from './sample'
import Seperator from './Seperator';
import "./styles.css";
const {props:{incentiveData}}=data
function DynamicIncentives({incentiveData}) {
    // const [leftIncentives,setLeftIncentives]=useState([])
    // const [rightIncentives,setRightIncentives]=useState([])
    const [errorMessage,setErrorMessage] = useState('')
    // const partitionIndex=useRef(-1)
    const [partitionIndex,setPartitionIndex]=useState()
    // useEffect(()=>{
    //     const partitionIndexes=incentiveData.reduce((incentiveIndexes,item,index) => {
    //         if(item.connector==='OR'){
    //             incentiveIndexes.push(index)
    //         }
    //         return incentiveIndexes
    //     },[]);
    //     if(partitionIndexes.length === 1){
    //         partitionIndex.current=partitionIndexes[0]
    //     }
    //     //Reminder: remove repeated code
    //     else if(partitionIndexes.length === 0){
    //         partitionIndex.current=incentiveData.length-1
    //     }
    //     if(partitionIndex.current!==-1){
    //         setLeftIncentives(incentiveData.slice(0,partitionIndex.current+1))
    //         setRightIncentives(incentiveData.slice(partitionIndex.current+1))
    //     }
    //     else{
    //         setErrorMessage("Tadaaaa!! Why multiple OR'S in offers 😉")
    //     }
    // },[partitionIndex.current])
    useEffect(()=>{
        const partitionIndexes=incentiveData.reduce((incentiveIndexes,item,index) => {
            if(item.connector==='OR'){
                incentiveIndexes.push(index)
            }
            return incentiveIndexes
        },[]);
        if(partitionIndexes.length === 1){
            setPartitionIndex(partitionIndexes[0])
        }
        //Reminder: remove repeated code
        else if(partitionIndexes.length === 0){
            setPartitionIndex(incentiveData.length-1)
        }
        else{
            setErrorMessage("Tadaaaa!! Why multiple OR'S in offers 😉")
        }
    },[partitionIndex])
    console.log(incentiveData.slice(NaN))
    return (
        <div className="wrapper">
            { partitionIndex && <IncentiveList incentives={incentiveData.slice(0,partitionIndex+1)}/>}
            {
                (partitionIndex!==-1 && partitionIndex < incentiveData.length-1) && 
                <Seperator connector="OR"/>
            }

            { partitionIndex && <IncentiveList incentives={incentiveData.slice(partitionIndex+1)}/>}

            {
                errorMessage && <h1>{errorMessage}</h1>
            }
        </div>
    )
}

DynamicIncentives.defaultProps={
    incentiveData:incentiveData
}

export default DynamicIncentives
