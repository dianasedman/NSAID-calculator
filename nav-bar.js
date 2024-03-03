let navWrapper = document.querySelector('.nav-wrapper'),
navToggler =  document.querySelector('.nav-toggler')

navToggler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})