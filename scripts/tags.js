let isTransparent = true;
const tag = document.getElementById('top-tags');

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
        tag.classList.add('_vanish');
        isTransparent = false;
    }

    if (window.pageYOffset <= 70 && !isTransparent) {
        tag.classList.remove('_vanish');
        isTransparent = true;
    }
});