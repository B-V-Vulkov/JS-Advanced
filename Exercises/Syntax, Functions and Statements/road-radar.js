function solve(speed, area) {
    const areaLimitParser = {
        motorway() { return 130 },
        interstate() { return 90 },
        city() { return 50 },
        residential() { return 20 },
    }

    const limit = areaLimitParser[area]();

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

console.log(solve(21, 'residential'));