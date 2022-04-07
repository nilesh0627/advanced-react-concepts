import React, { useEffect, useRef, useState } from 'react'
import IncentiveList from './IncentiveList';
import data from './sample'
import Seperator from './Seperator';
import "./styles.css";
const {props:{incentiveData}}=data
function DynamicIncentives({incentiveData}) {
    const [partitionIndex,setPartitionIndex]=useState()
    const [errorMessage,setErrorMessage] = useState('')
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
            setErrorMessage("No multiple OR'S allowed in GRID Format")
        }
    },[partitionIndex])
    //if we paas NaN as argument to Array.slice() then it returns whole array 
    //that's why we are using logical operator to check partitionIndex
    return (
        <div className="wrapper">

            { partitionIndex!==undefined && <IncentiveList incentives={incentiveData.slice(0,partitionIndex+1)}/>}

            {
                (partitionIndex!==-1 && partitionIndex < incentiveData.length-1) && 
                <Seperator connector="OR"/>
            }

            { partitionIndex!==undefined && <IncentiveList incentives={incentiveData.slice(partitionIndex+1)}/>}

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
