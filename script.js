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

moon.addEventListener('click', () => {
    if (moon.classList.contains('fa-moon')) {
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');
        moon.style.color = 'orange';
        ele.style.color="black";
    } else {
        moon.classList.remove('fa-sun');
        moon.classList.add('fa-moon');
        moon.style.color = 'white';
        
    }

    // Optional: You can also change the theme or other elements when toggling the icon
    let element = document.querySelector('body');
    let eles = document.querySelectorAll('p');
    let links = document.querySelectorAll('.links a');
    let ele2 = document.querySelector('.header');

   let font= document.querySelectorAll('.container em');
  

    if (moon.classList.contains('fa-sun')) {
        element.style.background = 'white';
        ele2.style.color="black";
        for (let p of eles) {
            p.style.color = 'black';
        }
        for (let a of links) {
            a.style.color = 'black';
        }
        for(let i of font){
            i.style.color="black";
        }
        
        
        
    } else {
        element.style.background = 'black';
        ele2.style.color='white';
        for (let p of eles) {
            p.style.color = 'white';
        }
        for (let a of links) {
            a.style.color = 'white';
        }
       
    }


    
});