export const getRemainingTime = (finishTimer) => {
    console.log('In Timer Function')
    const remainingTime = (finishTimer - new Date().getTime())/1000;
    const seconds = Math.floor((remainingTime) % 60);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const hours = Math.floor((remainingTime / (60 * 60)) % 24);
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    return {
        days, hours, minutes, seconds
    };
}

export const arrayRotate = (array, places) => {
    while (places--) {
        array.push(array.shift())
    }
    return array;
}