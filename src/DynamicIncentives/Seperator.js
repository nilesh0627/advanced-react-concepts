import React from 'react'
import "./styles.css";
function Seperator({connector}) {
    return (
        <div className="incentive-seperator">
            <div className="top"></div>
            <div className="middle">{ connector }</div>
            <div className="bottom"></div>
        </div>
    )
}

export default Seperator
