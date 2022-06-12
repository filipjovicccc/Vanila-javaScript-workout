const mobileMenu = () => {
  let head = document.querySelector(".header ul");
  let btn = document.querySelector(".header-btn");
  console.log(head);

  if (btn.innerHTML === "MENU") {
    head.style.display = "block";
    btn.innerHTML = "CLOSE";
  } else {
    head.style.display = "none";
    btn.innerHTML = "MENU";
  }
};

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

imgNum = 0;

rightBtn.addEventListener("click", () => {
  displayNone();
  imgNum++;
  if (imgNum === pictures.length) {
    imgNum = 0;
  }
  pictures[imgNum].style.display = "block";
});

leftBtn.addEventListener("click", () => {
  displayNone();
  imgNum--;
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  pictures[imgNum].style.display = "block";
});

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

const portfolioSort = (button) => {
  let category = button.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }
  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

//open modal

const openModal = () => {
  let popupModal = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  popupModal.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  let popupModal = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  popupModal.style.display = "none";
  overlay.style.display = "none";
};
