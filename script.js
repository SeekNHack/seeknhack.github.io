// script.js

document.addEventListener("DOMContentLoaded", function() {
    const colors = [
        '#6200ea', '#03dac6', '#ff0266', '#ffca28', '#4caf50', '#2196f3', '#9c27b0',
        '#ff5722', '#607d8b', '#795548', '#673ab7', '#00bcd4', '#ffc107', '#8bc34a',
        '#cddc39', '#3f51b5', '#009688', '#e91e63', '#f44336', '#3d5afe', '#651fff',
        '#d500f9', '#ff1744', '#76ff03', '#ff9100', '#ff4081', '#304ffe', '#c51162',
        '#00e676', '#00bfa5', '#ff80ab', '#ea80fc', '#8c9eff', '#80d8ff', '#a7ffeb',
        '#ccff90', '#ffe57f', '#ffd740', '#ffc400', '#ffab40', '#ff6e40', '#ff5252',
        '#ff4081', '#ff80ab', '#ea80fc', '#8c9eff', '#80d8ff', '#a7ffeb', '#b9f6ca',
        '#ccff90', '#f4ff81', '#ffff8d', '#ffe57f', '#ffd740', '#ffc400', '#ffab40',
        '#ff6e40'
    ];
    
    function randomColor() {
        // Genera un colore casuale con luminosità e saturazione fisse
        return chroma.random().saturate(2).brighten(2).hex();
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const background = document.querySelector('.background');
    const buttons = document.querySelectorAll('.btn');
    const flag = document.querySelector('.flag');

    const bgColor = getRandomColor();
    const btnColor = getRandomColor();
    const flagColor = getRandomColor();

    background.style.background = `linear-gradient(45deg, ${bgColor}, #faffd1)`;
    flag.style.color = flagColor;
    buttons.forEach(btn => {
        btn.style.backgroundColor = btnColor;
    });
});
