$(document).ready(function() {
    $('.ban__carousel-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.variant__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.service__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
