AOS.init();

var typed3 = new Typed('#typed3', {
  strings: ['a Developer', 'an Artist','an Editor', 'Jefferson'],
  typeSpeed: 80,
  backSpeed: 50,
  smartBackspace: true, // this is a default
  loop: true
});

$('.my-element').paroller();
$('.jumbotron').paroller();

const toggleButton = document.getElementById('toggleButton');
const card = document.getElementById('card');

toggleButton.addEventListener('click', function() {
  card.classList.toggle('hide-card');
});