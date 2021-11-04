export const getRandomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}

export const getPaletteColor = () => {
    const palette = ['234357', 'a3827c', '616673', 'e8d3c3', 'ecac8b', 'c5bbbe', 'c4b0a9', '52393b', '75483a'];
    return palette[Math.floor(Math.random() * palette.length)];
}

export const getRandomNumber = () => {
    return Math.floor(Math.random() * 9);
}