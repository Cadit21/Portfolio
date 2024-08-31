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

function popinfo2() {
    Swal.fire({
        title: "TODO-APP",
        text: "The Todo app is a task management tool designed to help users stay organized and on top of their to-do lists. With Toto, users can effortlessly create tasks, update details as needed, and delete tasks that are no longer relevant. The app also allows users to mark tasks as complete, giving them a clear view of their progress. The intuitive interface ensures that managing tasks is a seamless experience, making Toto an essential tool for anyone looking to enhance their productivity.",
        imageUrl: "todo.png",
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
            window.location.href = "https://todo-f3sn.vercel.app/"; // Replace with your live app URL
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Redirect to the code repository link
            window.location.href = "https://github.com/Cadit21/Todo"; // Replace with your GitHub or code repository URL
        }
    });
}

let bt= document.querySelector('.tob');

bt.addEventListener('click',popinfo2);

function popinfo3() {
    Swal.fire({
        title: "MUSIC APP",
        text: "The music app you're developing allows users to fully control their listening experience. With features to play songs, pause them, forward to the next track, and easily switch between tracks, this app provides a seamless and enjoyable music experience. The intuitive design ensures that users can effortlessly manage their music, making it perfect for any music lover.",
        imageUrl: "music.png",
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
            window.location.href = "https://cadit21.github.io/Music-App/"; // Replace with your live app URL
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Redirect to the code repository link
            window.location.href = "https://github.com/Cadit21/Music-App"; // Replace with your GitHub or code repository URL
        }
    });
}
let button= document.querySelector('.mus');
button.addEventListener('click',popinfo3);

function popinfo4() {
    Swal.fire({
        title: "Aerothon 2024",
        text: "Participated in Aerothon 2024 with a team of 10. In Phase 1, we successfully submitted and presented the design report of an autonomous drone capable of operations such as hotspot identification, target detection, and payload delivery. This phase was conducted in Bangalore in June 2024, and we successfully cleared it.",
        imageUrl: "aerot.png",
        width: "50rem",
        showCancelButton: true,
       // Confirm button color
        cancelButtonColor: "#f39c12", // Cancel button color
       
        cancelButtonText: "View Report",
        showCloseButton: true, // Adds the cross icon at the top right
        customClass: {
            confirmButton: 'custom-button',
            cancelButton: 'custom-button',
        },
    }).then((result) => {
        
         if (result.dismiss === Swal.DismissReason.cancel) {
            // Redirect to the code repository link
            window.location.href = "https://drive.google.com/file/d/1RQjXLUsZU9PgMoHpO0tW8Vdi09h3rm3u/view?usp=sharing"; // Replace with your GitHub or code repository URL
        }
    });
}

let abtn= document.querySelector('.aero');
abtn.addEventListener('click',popinfo4)

function popinfo5() {
    Swal.fire({
        title: "    Indian Karting Racing 2023",
        text: "Participated in the Indian Karting Racing event, where I was involved in the design and manufacturing of a go-kart. Our kart achieved a top speed of 60 km/h, earning us both the People's Choice Award and the Future Talent Award.",
        imageUrl: "ikr2.png",
        width: "50rem",
        showCancelButton: true,
       // Confirm button color
        cancelButtonColor: "#f39c12", // Cancel button color
       
        cancelButtonText: "Certificate",
        showCloseButton: true, // Adds the cross icon at the top right
        customClass: {
            confirmButton: 'custom-button',
            cancelButton: 'custom-button',
        },
    }).then((result) => {
        
         if (result.dismiss === Swal.DismissReason.cancel) {
            // Redirect to the code repository link
            window.location.href = "https://drive.google.com/file/d/10UDAvlRSYE2_JGenHjev-uugJpq49jeG/view?usp=sharing"; // Replace with your GitHub or code repository URL
        }
    });
}

let ikrbtn= document.querySelector('.ikr');

ikrbtn.addEventListener('click',popinfo5);




