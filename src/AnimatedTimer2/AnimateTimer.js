
import { TweenLite, TweenMax, Expo } from 'gsap';
function getRemainingTime(remainingTime) {
    remainingTime = remainingTime / 1000
    const seconds = Math.floor((remainingTime) % 60);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const hours = Math.floor((remainingTime / (60 * 60)));
    return { hours, minutes, seconds }
}
export const animateTimer = () => {
    TweenLite.defaultEase = Expo.easeIn;
    // TweenLite.defaultEase = Bounce.easeInOut; -->> need to check with sally what animation effect is needed 

    initTimer("20:01:02"); // other ways --> "0:15" "03:5" "5:2"

    // var timerEl = document.querySelector('.timer');

    function initTimer(t) {
        var self = this,
            timerEl = document.querySelector('.timer'),
            hoursGroupEl = timerEl.querySelector('.hours-group'),
            minutesGroupEl = timerEl.querySelector('.minutes-group'),
            secondsGroupEl = timerEl.querySelector('.seconds-group'),

            hoursGroup = {
                firstNum: hoursGroupEl.querySelector('.first'),
                secondNum: hoursGroupEl.querySelector('.second')
            },

            minutesGroup = {
                firstNum: minutesGroupEl.querySelector('.first'),
                secondNum: minutesGroupEl.querySelector('.second')
            },

            secondsGroup = {
                firstNum: secondsGroupEl.querySelector('.first'),
                secondNum: secondsGroupEl.querySelector('.second')
            };

        var [hour, min, sec] = t.split(':');
        var time = { hour, min, sec };
        console.log(time)

        var timeNumbers;

        function updateTimer() {

            var timestr;
            // var date = new Date();

            // date.setHours(time.hour)
            // date.setMinutes(time.min);
            // date.setSeconds(time.sec);

            // var newDate = new Date(date.valueOf() - 1000);
            var ramainingTime = (Number(time.hour) * 60 * 60 + Number(time.min) * 60 + Number(time.sec)) * 1000 - 1000
            console.log(time)
            console.log(ramainingTime)
            // var temp = newDate.toTimeString().split(" ");
            // var tempsplit = temp[0].split(':');

            // var tempsplit = temp[0].split(':');

            // time.hour = tempsplit[0];
            // time.min = tempsplit[1];
            // time.sec = tempsplit[2];
            // console.log(time)

            const { hours, minutes, seconds } = getRemainingTime(ramainingTime)
            console.log(getRemainingTime(ramainingTime))
            time.hour = hours > 9 ? hours : '0' + hours
            time.min = minutes > 9 ? minutes : '0' + minutes
            time.sec = seconds > 9 ? seconds : '0' + seconds
            timestr = time.hour + '' + time.min + '' + time.sec;
            console.log(timestr)
            timeNumbers = timestr.split('');
            updateTimerDisplay(timeNumbers);

            if (timestr === '000000')
                countdownFinished();

            // if (timestr != '000000')
            //     setTimeout(updateTimer, 1000);

        }

        function updateTimerDisplay(arr) {
            console.log({ hoursGroup })
            animateNum(hoursGroup.firstNum, arr[0]);
            animateNum(hoursGroup.secondNum, arr[1]);
            animateNum(minutesGroup.firstNum, arr[2]);
            animateNum(minutesGroup.secondNum, arr[3]);
            animateNum(secondsGroup.firstNum, arr[4]);
            animateNum(secondsGroup.secondNum, arr[5]);

        }

        function animateNum(group, arrayValue) {

            // TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
            TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
                y: - group.querySelector('.num-' + arrayValue).offsetTop
            });

        }

        setTimeout(updateTimer, 1000);

    }

    function countdownFinished() {
        // setTimeout(function () {
        //     TweenMax.set(reloadBtn, { scale: 0.8, display: 'block' });
        //     TweenMax.to(timerEl, 1, { opacity: 0.2 });
        //     TweenMax.to(reloadBtn, 0.5, { scale: 1, opacity: 1 });
        // }, 1000);
    }
}