/* Please ❤ this if you like it! */
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
OpenMenu()
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
CloseMenu()
  }
});

/*     Fullscreen btn     */
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
     e.preventDefault();
     if (!fullscreen) {
         fullscreen = true;
         document.documentElement.requestFullscreen();
         fsEnter.innerHTML = "Exit Fullscreen";
     }
     else {
         fullscreen = false;
         document.exitFullscreen();
         fsEnter.innerHTML = "Go Fullscreen";
     }
 });