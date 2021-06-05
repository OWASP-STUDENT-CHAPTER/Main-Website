// function ShowContent1() {
//   document.querySelector(".para2").style.display = "none";
//   document.querySelector(".parax").style.display = "block";
// }
//console.log("a");
const acronym = document.querySelector(".acronym");
// console.log(acronym);
const mouseEnterHandle = () => {
  // console.log("a");
  // if (isAcronymAnimating) return;
  // console.log(isAcronymAnimating, "isAcronymAnimating");
  // //   console.log(event.target.closest("p").innerText);
  // //   console.log(acronym.firstElementChild.innerText);
  // isAcronymAnimating = true;
  // //   if (event.target.closest("p")) {
  // // event.target
  // //   .closest("p")
  acronym.firstElementChild.querySelectorAll("span.acronym").forEach((el) => {
    el.style.width = el.scrollWidth + "px";
  });
  //   }
  // wordArray.forEach((w, index) => {
  //   for (var i = 0; i < w.length; i++) {
  //     animateLetterIn(w, i);
  //   }
  // });
  // isAcronymAnimating = false;
};

const mouseOutHandle = () => {
  // if (isAcronymAnimating) return;
  // isAcronymAnimating = true;
  // //   if (event.target.closest("p")) {
  acronym.firstElementChild
    .closest("h1")
    .querySelectorAll("span.acronym")
    .forEach((el) => {
      el.style.width = 0;
    });
  //   }

  //   wordArray.forEach((w, index) => {
  // for (var j = 0; j < wordArray.length; j++) {
  //   let w = wordArray[j];
  //   for (var i = 0; i < w.length; i++) {
  //     animateLetterOut(w, i);
  //   }
  // }
  //   });
  // isAcronymAnimating = false;
};

// acronym.addEventListener("mouseover", (event) => mouseEnterHandle(event));
// acronym.addEventListener("mouseout", (event) => mouseOutHandle(event));

// acronym.removeEventListener("mouseover", (event) => mouseEnterHandle(event));
// acronym.removeEventListener("mouseout", (event) => mouseOutHandle(event));

const animatee = () => {
  mouseEnterHandle();
  setTimeout(mouseOutHandle, 1500);
};
animatee();
setInterval(animatee, 3000);
