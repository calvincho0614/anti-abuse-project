const generateColor = () => {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + (
    0.9 * r() + 0.1).toFixed(1) + ')';
}

const generateColorList = num => {
    let result = [];
    for (let i = 0; i < num; i++) 
        result.push(generateColor());
    return result;
}

export {
    generateColor,
    generateColorList
}
