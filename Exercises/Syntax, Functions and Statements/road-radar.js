function solve(speed, area) {
    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    const overLimit = speed - limit;

    if (overLimit <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else if (overLimit > 0 && overLimit <= 20) {
        return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - speeding`;
    } else if (overLimit > 20 && overLimit <= 40) {
        return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - excessive speeding`;
    } else {
        return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - reckless driving`;
    }
}