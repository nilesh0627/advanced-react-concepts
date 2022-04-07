import React from 'react'
import "./styles.scss"
function AnimatedTimer() {
  return (
    <div class='wrapper'>
    <div class='time-part-wrapper'>
      <div class='time-part hours tens'>
        <div class='digit-wrapper'>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>
          <span class='digit'>0</span>
        </div>
      </div>
      <div class='time-part hours ones'>
        <div class='digit-wrapper'>
          <span class='digit'>9</span>
          <span class='digit'>8</span>
          <span class='digit'>7</span>
          <span class='digit'>6</span>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>  
          <span class='digit'>0</span>        
        </div>
      </div>
    </div>
    <div class='time-part-wrapper'>
      <div class='time-part minutes tens'>
        <div class='digit-wrapper'>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>
          <span class='digit'>0</span>
        </div>
      </div>
      <div class='time-part minutes ones'>
        <div class='digit-wrapper'>
          <span class='digit'>9</span>
          <span class='digit'>8</span>
          <span class='digit'>7</span>
          <span class='digit'>6</span>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>   
          <span class='digit'>0</span>       
        </div>
      </div>
    </div>
    <div class='time-part-wrapper'>
      <div class='time-part seconds tens'>
        <div class='digit-wrapper'>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>
          <span class='digit'>0</span>
        </div>
      </div>
      <div class='time-part seconds ones'>
        <div class='digit-wrapper'>
          <span class='digit'>9</span>
          <span class='digit'>8</span>
          <span class='digit'>7</span>
          <span class='digit'>6</span>
          <span class='digit'>5</span>
          <span class='digit'>4</span>
          <span class='digit'>3</span>
          <span class='digit'>2</span>
          <span class='digit'>1</span>
          <span class='digit'>0</span>
        </div>
      </div>
    </div>
  </div>
  
  )
}

AnimatedTimer.defaultProps={
    currentTimer:'59:59:10'
}

export default AnimatedTimer