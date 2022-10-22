let isTransparent = true;
const tag = document.getElementById('top-tags');
const scroll = document.getElementById('mouse');

if (window.pageYOffset > 70) {
    mouse.classList.add('_vanish');
}

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
        tag.classList.add('_vanish');
        isTransparent = false;
    }

    if (window.pageYOffset <= 70 && !isTransparent) {
        tag.classList.remove('_vanish');
        isTransparent = true;
    }

    if (window.pageYOffset > 70) {
        mouse.classList.add('_vanish');
    }
    
});