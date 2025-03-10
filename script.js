/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ================= email mechnism ===========================
document.getElementById("contact-form").addEventListener('submit', function (e) {
    e.preventDefault();

    const to_name = "ah0681988@gmail.com";
    const from_name = document.getElementById('name').value; // Use 'name' for full name
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!from_name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // show loading animation while the message is send
    document.getElementById('submit_btn').style.display = 'none';
    document.getElementById('loading-btn').style.display = 'flex';


    emailjs.init("ZjCuN6YW2Pc9Rn72H"); // Replace with the correct key
    emailjs.send("service_bvch679", "template_lbxvkkb", {
        to_name: to_name,
        from_name: from_name,
        email: email, // Include this if needed
        message: message,
    }).then(function (response) {
        document.getElementById('submit_btn').style.display = 'block';
        document.getElementById('loading-btn').style.display = 'none';
        document.getElementById('contact-form').reset();
        showMessage();
    }, function (error) {
        alert("Error sending message: " + JSON.stringify(error));
        document.getElementById('submit_btn').style.display = 'block';
        document.getElementById('loading-btn').style.display = 'none';
    });
});

function showMessage() {
    let messageBox = document.getElementById("custom-message");
    // Add slide-in animation
    messageBox.style.animation = "slideIn 0.5s ease-in forwards";
    // Remove animation & add fade-out after 4s
    setTimeout(() => {
        messageBox.style.animation = "fadeOut 1s ease-out forwards";
    }, 4000);
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content  ', { origin: 'right' });



/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Dev', 'Backend Dev', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
    reset: true
});