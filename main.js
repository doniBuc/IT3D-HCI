


const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
item.addEventListener("click",function(){
        this.classList.toggle("collapsible--expanded")
}));

const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-menu");
const nav = document.querySelector(".page-header nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
        lottiePlayer.play();
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
        lottiePlayer.stop();
      }
      lastScroll = currentScroll;
    });

// let lastScrollTop = 0 ; 

//  navbar = document.getElementById("log");
//         window.addEventListener("scroll",function(){
                
//          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
//                 if(scrollTop > lastScrollTop){
//                        navbar.style.top = "-57.25px";
//                 }else{
//                         navbar.style.top ="0";
//                 }
//                 lastScrollTop = scrollTop; 
//         })

// const body = document.body;
// const triggerMenu = document.querySelector(".page-header .trigger-menu");
// const nav = document.querySelector(".page-header nav");
// const menu = document.querySelector(".page-header .menu");
// const lottieWrapper = document.querySelector(".lottie-wrapper");
// const lottiePlayer = document.querySelector("lottie-player");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

// lottieWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   triggerMenu.click();
//   body.classList.toggle("menu-open-with-lottie");
// });

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove(scrollUp);
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//     // down
//     body.classList.remove(scrollUp);
//     body.classList.add(scrollDown);
//     lottiePlayer.play();
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains(scrollDown)
//   ) {
//     // up
//     body.classList.remove(scrollDown);
//     body.classList.add(scrollUp);
//     lottiePlayer.stop();
//   }
//   lastScroll = currentScroll;
// });
