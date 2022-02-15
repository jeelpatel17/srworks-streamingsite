let hamburgerNav = document.getElementById("hamburger");
let navlinks = document.getElementById("navbar__links");
let navbar = document.getElementById("navbar");
let submitBtn = document.getElementById("formSubmitBtn");
let backToTop = document.getElementById("backToTop");

// MAKING THE NAVBAR STICK TO THE TOP EVEN AFTER THE USER SCROLLS

navbar.addEventListener("click", () => {
  hamburgerNav.classList.toggle("is-active");
  navlinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  // IF USER SCROLLS TO THE TOP, THE NAVBAR LOGO WILL BE TURNED BLACK AND THE NAVBAR BACKGROUND WILL BE TRANSPARENT
  if (document.documentElement.scrollTop <= 50) {
    navbar.classList.remove("scrolled");
    document.getElementById("navbar__logo").style.filter = "grayscale(1)";
    Array.from(document.querySelectorAll(".navbar__link a")).forEach((e) => {
      e.classList.remove("scrolled");
    });
  } else {
    navbar.classList.add("scrolled");
    document.getElementById("navbar__logo").style.filter = "grayscale(0)";
    Array.from(document.querySelectorAll(".navbar__link a")).forEach((e) => {
      e.classList.add("scrolled");
    });
  }
});

// FOR 'BACK-TO-TOP' BUTTON
backToTop.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

// TO PREVENT PAGE RELOAD WHEN FORM IS SUBMITTED AND DISPLAY AN ALERT TO THE USER
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameInp = document.getElementById("name");
  let email = document.getElementById("email");
  let textarea = document.getElementById("textarea");
  let nameError = document.getElementById("nameError");
  let mailError = document.getElementById("mailError");
  let msgError = document.getElementById("msgError");

  if (nameInp.value && email.value && textarea.value) {
    alert("Your form is successfully submitted!");

    // REMOVING ANY ERROR MESSAGES FROM THE LABELS AFTER FORM VALIDATION
    Array.from(document.getElementsByClassName("errorMsg")).forEach(
      (e) => (e.style.display = "none")
    );
  } else {
    //   TO VALIDATE THE FORM INPUTS
    !nameInp.value.length
      ? (nameError.style.display = "inline")
      : (nameError.style.display = "none");

    !email.value.length
      ? (mailError.style.display = "inline")
      : (mailError.style.display = "none");

    !textarea.value.length
      ? (msgError.style.display = "inline")
      : (msgError.style.display = "none");
  }
});
