function getTime(steps, footprint, speed) {
    const distance = steps * footprint;
    const timeToRest = Math.floor(distance / 500) * 60;
    let seconds = distance / ((1_000 / 3_600) * speed) + timeToRest;

    const hours = Math.floor(seconds / 3600);
    seconds -= (hours * 3600);
    const minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);

    const hoursForPrint = Math.round(hours).toString().padStart(2, '0');
    const minutesForPrint = Math.round(minutes).toString().padStart(2, '0');
    const secondsForPrint = Math.round(seconds).toString().padStart(2, '0');
    
    return `${hoursForPrint}:${minutesForPrint}:${secondsForPrint}`;
}

console.log(getTime(2564, 0.70, 5.5));