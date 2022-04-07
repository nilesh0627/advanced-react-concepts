import React from 'react'
import './styles.css'
function Incentive({title,label,value,...props}) {
    const {labelFontColor,labelFontSize, labelFontWeight, titleFontColor, titleFontSize, titleFontWeight, valueFontColor, valueFontSize, valueFontWeight} = props
    return (
        <div className="incentive-wrapper">
            <div className={`${titleFontColor} ${titleFontSize} ${titleFontWeight}`}>{title}</div>
            <div className={`${valueFontColor} ${valueFontSize} ${valueFontWeight}`}>{value}</div>
            <div className={`${labelFontColor} ${labelFontSize} ${labelFontWeight}`}>{label}</div>
        </div>
    )
}

Incentive.defaultProps={
    labelFontColor: 'brand-secondary',
    labelFontSize: 'brand-size-3',
    labelFontWeight:'',
    titleFontColor: 'brand-secondary',
    titleFontSize: 'brand-size-3',
    titleFontWeight:'',
    valueFontColor: 'brand-primary',
    valueFontSize: 'brand-size-1',
    valueFontWeight:'brand-bold',
}

export default Incentive
