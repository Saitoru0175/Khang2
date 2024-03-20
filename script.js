function makeSnow() {
    const snow = document.createElement('div');
    const size = Math.random() * 4.5 + 3.5;
    snow.className = 'snow';
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    snow.style.left = Math.random() * window.innerWidth + 'px';
    if (size < 7) {
        snow.style.zIndex = -5;
    }
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 5000);
}
setInterval(makeSnow, 40);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeKeyframesColor() {
    var blinkKeyframes = document.styleSheets[0].cssRules[7]; // Lấy keyframes blink
    var newKeyframes = '';

    for (var i = 0; i <= 100; i++) {
        var randomColor = getRandomColor();
        newKeyframes += i + '% { background-color: ' + randomColor + '; }';
    }

    blinkKeyframes.cssText = newKeyframes;
}

setInterval(changeKeyframesColor, 2000); // Cập nhật màu mỗi 2 giây