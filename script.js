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
let form = document.querySelector('form');

function sendEmail() {
    // Get values from the form inputs
    let name = document.querySelector('input[placeholder="Enter Your Name"]').value;
    let email = document.querySelector('input[placeholder="Enter Your Email"]').value;
    let messageContent = document.querySelector('textarea[placeholder="Type Your Message Here"]').value;

    // Construct the email subject and body
    let subject = `Message from ${name} (${email})`;
    let body = `You have received a new message from ${name} (${email}):\n\n${messageContent}`;

    // Send the email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aditic041@gmail.com",
        Password: "F5677AA773EBE914B596CB6B2F3FC4C33D93",
        To: 'aditic041@gmail.com',
        From: "aditic041@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            if(message=='OK'){
                Swal.fire({
                    title: "!Success",
                    text: "Message Sent Successfully",
                    icon: "success"
                  });
            }
        }
    ).catch(error => {
        console.error("Error sending email:", error);
    });
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendEmail();
})

let btn = document.querySelector(".button-more button");
console.log(btn);



btn.addEventListener('click',()=>{
    Swal.fire({
        title:"<strong>About Me</strong>",
        text: "I'm a frontend developer with strong problem-solving skills and a solid understanding of data structures and algorithms. I'm passionate about new technologies and have a strong interest in AI/ML. I'm currently in the 4th year of my B.Tech at G.B. Pant DSEU Okhla - I Campus, majoring in Electronics & Communication. Throughout college, I've participated in various technical events, including Aerothon 2024 conducted by SAE and IKR 2023, and I've also been actively involved in hackathons.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

});

let wb= document.querySelector('.wa');

function popinfo() {
    Swal.fire({
        title: "Weather App",
        text: "The Weather App is a sleek and user-friendly application designed to provide you with accurate and up-to-date weather conditions for any city of your choice. Simply type the name of the city, and the app instantly delivers a detailed 4-day weather forecast. Get the latest weather conditions, including temperature, humidity, wind speed, and atmospheric pressure. The app is designed for ease of use, with a simple input field for entering the city name and clear, concise weather reports.",
        imageUrl: "project1.png",
        width: "50rem",
        showCancelButton: true,
        confirmButtonColor: "#3085d6", // Confirm button color
        cancelButtonColor: "#f39c12", // Cancel button color
        confirmButtonText: "View Live App",
        cancelButtonText: "View Code",
        showCloseButton: true, // Adds the cross icon at the top right
        customClass: {
            confirmButton: 'custom-button',
            cancelButton: 'custom-button',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to the live app link
            window.location.href = "https://cadit21.github.io/Weather-App/"; // Replace with your live app URL
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Redirect to the code repository link
            window.location.href = "https://github.com/Cadit21/Weather-App"; // Replace with your GitHub or code repository URL
        }
    });
}





wb.addEventListener('click',popinfo);




