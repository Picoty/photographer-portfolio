let percentage = document.querySelectorAll('.percent');

let count = 0;

percentage.forEach((i) => {
    const updateCount = () => {
        let target = +i.getAttribute('data-count');
        if (count < target) {
            count ++;
            i.innerHTML = `${count}%`;
            setTimeout(updateCount, 50);
        }
        else {
            i.innerHTML = `${target}%`;
        }
    }
    updateCount();
});

const upArrow = document.querySelector('.fa-arrow-alt-circle-up');

upArrow.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const copyRight = document.querySelector('#copyright');

const year = new Date().getFullYear();

copyRight.innerHTML = year;

// HAMBURGER MENU
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.style.display='block';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navBar.style.display='none';
    menuOpen = false;
  }
});