function solve(text) {
    let result = text
        .toUpperCase()
        .match(/[a-zA-Z0-9]*/g)
        .filter(x => x != '');

    return result.join(', ');
}

console.log(solve('adad 12 dsdsd dsdsd,,, ,,  dsd 3 d 121212!!!! !!!!@@ dsdsd !@3333 \' adad dsdsd dsdsd 121212!!!! !!!!@@ dsdsd Hi, how are you?'));