let ele = document.getElementsByClassName('menu-content')[0];

let moon= document.querySelector('.header i');

function toggleMenu() {
    if (ele.style.display === 'block') {
        ele.style.display = 'none';
    } else {
        ele.style.display = 'block';
    }
}


function typeWriter(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '|';
        setTimeout(() => typeWriter(element, text, index + 1, callback), 100);
    } else {
        setTimeout(() => callback(), 2000); // Pause before changing text
    }
}

function startTypingAnimation() {
    const element = document.querySelector('.animated-text');
    const texts = ["Front-End Developer", "Tech Enthusiast"];
    let textIndex = 0;

    function nextText() {
        typeWriter(element, texts[textIndex], 0, () => {
            textIndex = (textIndex + 1) % texts.length;
            nextText();
        });
    }

    nextText();
}

document.addEventListener('DOMContentLoaded', () => {
    startTypingAnimation();
});

