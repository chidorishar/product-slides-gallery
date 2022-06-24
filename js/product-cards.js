const domEls = {
  productWrappers: document.querySelectorAll('.js-product-wrapper'),
};

domEls.productWrappers.forEach(el => el.addEventListener('click', rotateCards));

function rotateCards(event) {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  const cards = event.currentTarget.querySelectorAll('.slide');

  cards.forEach(el => {
    el.classList.toggle('rotated');
    el.classList.toggle('invisible');
  });
}
