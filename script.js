// script.js

document.addEventListener("DOMContentLoaded", function() {
 /* Background, buttons and flag colors are generated randomly from colorPatterns */
    const colorPatterns = [
        {
            name: "Summer",
            colors: ["#fb8500", "#219ebc", "#ffffff", "#ffffff"]
        },
        {
            name: "Autumn",
            colors: ["#f72585", "#7209b7", "#3a0ca3", "#ffffff"]
        },
        {
            name: "Winter",
            colors: ["#0f4c75", "#bbe1fa", "#f0f0f0", "#219ebc"]
        },
        {
            name: "Spring",
            colors: ["#ff6b6b", "#f4f1de", "#2ec4b6", "#d4a373"]
        },
        {
            name: "Pastel",
            colors: ["#bc6c25", "#fefae0", "#5e6472", "#606c38"]
        },
        {
            name: "BlueYellow",
            colors: ["#003566", "#001d3d", "#ffc300", "#ffd60a"]
        },
        {
            name: "BlackWhite",
            colors: ["#000000", "#ffffff", "#ffffff", "#000000"]
        },
        {
            name: "Ocean",
            colors: ["#22577a", "#38a3a5", "#80ed99", "#c7f9cc"]
        },
        {
            name: "Mountain",
            colors: ["#f72585", "#3a0ca3", "#4cc9f0", "#4cc9f0"]
        },
        {
            name: "Summer2",
            colors: ["#ff9f1c", "#2ec4b6", "#cbf3f0", "#ffffff"]
        },
        {
            name: "Autumn2",
            colors: ["#90a955", "#31572c", "#90a955", "#ecf39e"]
        },
        {
            name: "OceanStone",
            colors: ["#3a7ca5", "#16425b", "#f0f0f0", "#d9dcd6"]
        }

    ];
    
    function getRandomColor() {
        return colorPatterns[Math.floor(Math.random() * colorPatterns.length)];
        //return colorPatterns[11];
    }

    const background = document.querySelector('.background');
    const buttons = document.querySelectorAll('.btn');
    const flag = document.querySelector('.flag');

    const randomPattern = getRandomColor();
    const bgColor = randomPattern.colors[0];
    const btnColor = randomPattern.colors[1];
    const flagColor = randomPattern.colors[2];
    const fontcolor = randomPattern.colors[3];

    background.style.background = `linear-gradient(45deg, ${bgColor}, #fff)`;
    flag.style.color = flagColor;
    buttons.forEach(btn => {
        btn.style.backgroundColor = btnColor;
        btn.style.color = fontcolor;
        // Coloro il font dentro il bottone
    
    });
});
