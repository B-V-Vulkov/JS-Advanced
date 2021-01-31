function solve(requirements) {
    let car = {
        model: requirements.model,
        carriage: {
            type: requirements.carriage,
            color: requirements.color
        },
        engine: getEngine(requirements.power),
        wheels: getWheels(requirements.wheelsize)
    }

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];

        return engines.find(x => x.power >= requirements.power);
    }

    function getWheels(size) {
        size = Math.floor(size);
        if (size % 2 === 0) {
            size -= 1;
        }

        return Array(4).fill(size);
    }

    return car;
}

const requirements = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}

console.log(solve(requirements));