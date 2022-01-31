import "./main.scss"; // for webpack sass loader

// MAIN W SOCIAL/FOOTER/HEADER
import "./assets/img/logo.svg";
import "./assets/img/apostrophe.png";
import "./assets/img/booking-img.png";
import "./assets/img/citate.png";
import "./assets/img/facebook.png";
import "./assets/img/instagram.png";
import "./assets/img/instroction-img.jpg";
import "./assets/img/intro-img.png";
import "./assets/img/makeup.png";
import "./assets/img/nails.png";
import "./assets/img/story-img.png";
import "./assets/img/tatto.png";
import "./assets/img/testimonials.png";
import "./assets/img/twitter.png";

// SERVICES
import "./assets/img/hands.png";
import "./assets/img/face.png";
import "./assets/img/body.png";

// ABOUTE
import "./assets/img/banita.png";
import "./assets/img/hanga.png";
import "./assets/img/model.png";
import "./assets/img/sahur.png";
import "./assets/img/Signature.png";

//CONTACTS
import "./assets/img/address.png";
import "./assets/img/clock.png";
import "./assets/img/telephone.png";

//SLIDER
import { tns } from "tiny-slider";

window.addEventListener("load", () => {
  const header = document.querySelector("header");
  const burger = header.querySelector(".js-burger");

  burger.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  if (document.querySelector(".slider")) {
    tns({
      container: ".slider",
      items: 1,
      autoplay: true,
      controls: false,
      nav: false,
      autoplayButtonOutput: false,
      responsive: {
        991: {
          items: 3,
        },
      },
    });
  }
});
