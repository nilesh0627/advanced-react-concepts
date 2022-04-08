import React from 'react'
import { animateTimer } from './AnimateTimer'
import './styles.scss'
function AnimatedTimer() {
    document.addEventListener('DOMContentLoaded', animateTimer)
    return (
        <>
            <div class="timer">
                <div class="timer--clock">
                    <div class="hours-group clock-display-grp">
                        <div class="first number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                        <div class="second number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="clock-separator"><p>:</p></div>
                    <div class="minutes-group clock-display-grp">
                        <div class="first number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                        <div class="second number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="clock-separator"><p>:</p></div>
                    <div class="seconds-group clock-display-grp">
                        <div class="first number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                        <div class="second number-grp">
                            <div class="number-grp-wrp">
                                <div class="num num-0"><p>0</p></div>
                                <div class="num num-1"><p>1</p></div>
                                <div class="num num-2"><p>2</p></div>
                                <div class="num num-3"><p>3</p></div>
                                <div class="num num-4"><p>4</p></div>
                                <div class="num num-5"><p>5</p></div>
                                <div class="num num-6"><p>6</p></div>
                                <div class="num num-7"><p>7</p></div>
                                <div class="num num-8"><p>8</p></div>
                                <div class="num num-9"><p>9</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reload">
                Reload
            </div>
        </>
    )
}

export default AnimatedTimer