
import { TweenLite, TweenMax, Expo } from 'gsap';
import React from 'react'
import './styles.scss'
function AnimatedTimer() {
  document.addEventListener('DOMContentLoaded',()=>{
    TweenLite.defaultEase = Expo.easeOut;

    initTimer("00:11"); // other ways --> "0:15" "03:5" "5:2"
    
    var reloadBtn = document.querySelector('.reload');
    var timerEl = document.querySelector('.timer');
    
    function initTimer (t) {
       
       var self = this,
           timerEl = document.querySelector('.timer'),
           minutesGroupEl = timerEl.querySelector('.minutes-group'),
           secondsGroupEl = timerEl.querySelector('.seconds-group'),
    
           minutesGroup = {
              firstNum: minutesGroupEl.querySelector('.first'),
              secondNum: minutesGroupEl.querySelector('.second')
           },
    
           secondsGroup = {
              firstNum: secondsGroupEl.querySelector('.first'),
              secondNum: secondsGroupEl.querySelector('.second')
           };
    
       var time = {
          min: t.split(':')[0],
          sec: t.split(':')[1]
       };
    
       var timeNumbers;
    
       function updateTimer() {
    
          var timestr;
          var date = new Date();
    
          date.setHours(0);
          date.setMinutes(time.min);
          date.setSeconds(time.sec);
    
          var newDate = new Date(date.valueOf() - 1000);
          var temp = newDate.toTimeString().split(" ");
          var tempsplit = temp[0].split(':');
    
          time.min = tempsplit[1];
          time.sec = tempsplit[2];
    
          timestr = time.min + time.sec;
          timeNumbers = timestr.split('');
          updateTimerDisplay(timeNumbers);
    
          if(timestr === '0000')
             countdownFinished();
    
          if(timestr != '0000')
             setTimeout(updateTimer, 1000);
    
       }
    
       function updateTimerDisplay(arr) {
    
          animateNum(minutesGroup.firstNum, arr[0]);
          animateNum(minutesGroup.secondNum, arr[1]);
          animateNum(secondsGroup.firstNum, arr[2]);
          animateNum(secondsGroup.secondNum, arr[3]);
    
       }
    
       function animateNum (group, arrayValue) {
    
          TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
          TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
             y: - group.querySelector('.num-' + arrayValue).offsetTop
          });
    
       }
       
       setTimeout(updateTimer, 1000);
    
    }
    
    function countdownFinished() {
       setTimeout(function () {
          TweenMax.set(reloadBtn, { scale: 0.8, display: 'block' });
          TweenMax.to(timerEl, 1, { opacity: 0.2 });
          TweenMax.to(reloadBtn, 0.5, { scale: 1, opacity: 1 }); 
       }, 1000);
    }
    
    reloadBtn.addEventListener('click', function () {
       TweenMax.to(this, 0.5, { opacity: 0, onComplete:
          function () { 
             reloadBtn.style.display= "none";
          } 
       });
       TweenMax.to(timerEl, 1, { opacity: 1 });
       initTimer("12:35");
    });
  })
  return (
    <>
    <div className="timer">
        <h3>JAVASCRIPT COUNTDOWN</h3>
        <div className="timer--clock">
           <div className="minutes-group clock-display-grp">
              <div className="first number-grp">
                 <div className="number-grp-wrp">
                    <div className="num num-0"><p>0</p></div>
                    <div className="num num-1"><p>1</p></div>
                    <div className="num num-2"><p>2</p></div>
                    <div className="num num-3"><p>3</p></div>
                    <div className="num num-4"><p>4</p></div>
                    <div className="num num-5"><p>5</p></div>
                    <div className="num num-6"><p>6</p></div>
                    <div className="num num-7"><p>7</p></div>
                    <div className="num num-8"><p>8</p></div>
                    <div className="num num-9"><p>9</p></div>
                 </div>
              </div>
              <div className="second number-grp">
                 <div className="number-grp-wrp">
                    <div className="num num-0"><p>0</p></div>
                    <div className="num num-1"><p>1</p></div>
                    <div className="num num-2"><p>2</p></div>
                    <div className="num num-3"><p>3</p></div>
                    <div className="num num-4"><p>4</p></div>
                    <div className="num num-5"><p>5</p></div>
                    <div className="num num-6"><p>6</p></div>
                    <div className="num num-7"><p>7</p></div>
                    <div className="num num-8"><p>8</p></div>
                    <div className="num num-9"><p>9</p></div>
                 </div>
              </div>
           </div>
           <div className="clock-separator"><p>:</p></div>
           <div className="seconds-group clock-display-grp">
              <div className="first number-grp">
                 <div className="number-grp-wrp">
                    <div className="num num-0"><p>0</p></div>
                    <div className="num num-1"><p>1</p></div>
                    <div className="num num-2"><p>2</p></div>
                    <div className="num num-3"><p>3</p></div>
                    <div className="num num-4"><p>4</p></div>
                    <div className="num num-5"><p>5</p></div>
                    <div className="num num-6"><p>6</p></div>
                    <div className="num num-7"><p>7</p></div>
                    <div className="num num-8"><p>8</p></div>
                    <div className="num num-9"><p>9</p></div>
                 </div>
              </div>
              <div className="second number-grp">
                 <div className="number-grp-wrp">
                    <div className="num num-0"><p>0</p></div>
                    <div className="num num-1"><p>1</p></div>
                    <div className="num num-2"><p>2</p></div>
                    <div className="num num-3"><p>3</p></div>
                    <div className="num num-4"><p>4</p></div>
                    <div className="num num-5"><p>5</p></div>
                    <div className="num num-6"><p>6</p></div>
                    <div className="num num-7"><p>7</p></div>
                    <div className="num num-8"><p>8</p></div>
                    <div className="num num-9"><p>9</p></div>
                 </div>
              </div>
           </div>
        </div>
        <h4>THE MOST SIMPLE WAY YOU WOULD HAVE FOUND.</h4>
     </div>
     <div className='reload'>Reload</div>
     </>
  )
}

export default AnimatedTimer