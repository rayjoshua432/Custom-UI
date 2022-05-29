const prompt = document.querySelector('.side-nav');
const close = document.querySelector('.close')
const menu = document.querySelector('.ham-menu')


close.addEventListener('click', () => {
    if (prompt.classList.contains('nav-open')) {
        prompt.classList.remove('nav-open')
        prompt.classList.add('nav-close')
    } else {
        prompt.classList.add('nav-open')
        prompt.classList.remove('nav-close')
    }
})

menu.addEventListener('click', () => {
    if (prompt.classList.contains('nav-close')) {
        prompt.classList.add('nav-open')
        prompt.classList.remove('nav-close')
    } else {
        prompt.classList.remove('nav-open')
        prompt.classList.add('nav-close')
    }
})
