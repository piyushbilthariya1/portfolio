let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav a");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle(".active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navlist.classList.contains("active")) {
      menu.classList.toggle("bx-x");
      navlist.classList.remove("active");
    }
  });
});

const form = document.querySelector("form");
const Namex = document.getElementById("name");
const Emailx = document.getElementById("email");
const Subjectx = document.getElementById("subject");
const Messagex = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name : ${Namex.value} <br> Email :  ${Emailx.value} <br> Message :  ${Messagex.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "piyushbilthariya@gmail.com",
    Password: "87078FF2AE624DA36A3BDBDF4B173F985D9B",
    To: "piyushbilthariya@gmail.com",
    From: "piyushbilthariya@gmail.com",
    Subject: Subjectx.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message: " + message);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}

if (scrollTop) {
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);
