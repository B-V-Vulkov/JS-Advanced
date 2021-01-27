function solve(commands) {
    const arr = [];
    const commandParser = {
        add(value) { arr.push(value); },
        remove() { arr.pop(); }
    }

    for (let i = 0; i < commands.length; i++) {
        commandParser[commands[i]](i + 1);
    }

    const result = arr.length != 0 ? arr.join('\n') : 'Empty';
    return result;
}

console.log(solve(['add', 'add', 'add', 'add']));
console.log(solve(['add', 'add', 'remove', 'add', 'add']));
