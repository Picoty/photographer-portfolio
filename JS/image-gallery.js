const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const thumbsUp = document.querySelector('.fa-thumbs-up');
let likes = document.querySelector('.likes');

let id = 0;


const opacity = 0.6;

// set first image opacity
imgs[0].style.opacity = opacity;



// imgs.forEach((img) => img.addEventListener('click', (e) => current.src = e.target.src));
// imgs.forEach((img) => img.addEventListener('click', () => current.src = img.src));

imgs.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
    id = (+e.target.classList[0]) - 1;
    // Reset the opacity
    imgs.forEach((img) => img.style.opacity = 1);
    // Change the src attribute on click
    current.src = e.target.src;
    // Add fade-in class
    current.classList.add('fade-in');
    // Remove fade-in class after 0.5s
    setTimeout(() => current.classList.remove('fade-in'), 500);
    // Change the opacity
    e.target.style.opacity = opacity;
}


function slideRight() {
    // Reset the opacity
    imgs.forEach((img) => img.style.opacity = 1);

    id++;
    if (id < imgs.length) {
        imgs[id].style.opacity = opacity;
        current.src = imgs[id].src;
    }
    else {
        id = -1;
        slideRight();
    }
}

setInterval(slideRight, 3000);

let likesNum;
localStorage.setItem('numberOfLikes', 0);
likesNum = +localStorage.getItem('numberOfLikes')
localStorage.setItem('clicked', false);

let clickedFlag;
clickedFlag = localStorage.getItem('clicked');



thumbsUp.addEventListener('click', addLike);
function addLike () {
    if (clickedFlag == 'false') {
        localStorage.setItem('clicked', true);
        clickedFlag = localStorage.getItem('clicked');
        thumbsUp.style.color='#000';
        likesNum++;
        localStorage.setItem('numberOfLikes', `${likesNum}`);
        likes.innerHTML = likesNum;
    }
    else if(clickedFlag == 'true') {
        thumbsUp.removeEventListener('click', addLike);
        alert('STOP');
    }
}






