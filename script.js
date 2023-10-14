
//slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

  });

// show search
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySetector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})



