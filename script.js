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
    
    function darkenColor(color, percent) {
        const num = parseInt(color.slice(1), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) - amt,
            G = (num >> 8 & 0x00FF) - amt,
            B = (num & 0x0000FF) - amt;
        return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
    }
    function getRandomColor() {
        return colorPatterns[Math.floor(Math.random() * colorPatterns.length)];
        //return colorPatterns[x];
    }

    const background = document.querySelector('.background');
    const buttons = document.querySelectorAll('.btn');
    const flag = document.querySelector('.flag');
    const p = document.querySelectorAll('p');
    
    const randomPattern = getRandomColor();
    const bgColor = randomPattern.colors[0];
    const btnColor = randomPattern.colors[1];
    const flagColor = randomPattern.colors[2];
    const fontcolor = randomPattern.colors[3];
    
    const darkBtnColor = darkenColor(btnColor, 20);

    background.style.background = `linear-gradient(45deg, ${bgColor}, #fff)`;
    flag.style.color = flagColor;
    
    buttons.forEach(btn => {
        btn.style.backgroundColor = btnColor;
        btn.style.color = fontcolor;
        
        // Coloro il font dentro il bottone
        // Aggiungi classe hover al mouseover e rimuovi al mouseout
        btn.addEventListener('mouseover', () => {
            btn.classList.add('hover');
            btn.style.backgroundColor = darkBtnColor;
            btn.style.backgroundColor = darkBtnColor;
        });
        btn.addEventListener('mouseout', () => {
            btn.classList.remove('hover');
            btn.style.backgroundColor = btnColor;
        });
    });
    
});
