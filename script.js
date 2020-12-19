const container = document.querySelector(".container");
const card = document.querySelector(".card");

// Card Content
const sneaker = document.querySelector(".sneaker img");
const info = document.querySelector(".info");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  info.style.transform = "translateZ(150px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "1.5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  sneaker.style.transition = "1.5s ease";
  sneaker.style.transform = "rotateZ(0deg)";
  info.style.transition = "1.5s ease";
  info.style.transform = "translateZ(0px)";
  sizes.style.transition = "1.5s ease";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transition = "1.5s ease";
  purchase.style.transform = "translateZ(0px)";
});
