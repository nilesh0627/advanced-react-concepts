import React from 'react'
import "./styles.css";
import Incentive from './Incentive'
function IncentiveList({incentives }) {
    return (
        <div class="incentives">
        {
               incentives.map((incentive,index)=>{
                   let title;
                   if(['PLUS','AND'].includes(incentives[index-1]?.connector)){
                        title=incentives[index-1]?.connector
                   }
                   return (
                       <Incentive
                         key={incentive.offerType}
                         title={title ? title : incentive.title}
                         label={incentive.label}
                         value={incentive.value}
                       />
                   )
               }) 
            }
        </div>
    )
}

export default IncentiveList
