import './coffee_shop.scss';

var ll = document.querySelector('.products_combo__item').offsetWidth
var width = ll; 
var count = 3;
console.log(ll);

var caruselSmall = document.getElementById('carusel_small');
var listingSmall = caruselSmall.querySelector ('ul');
var listItems = caruselSmall.querySelectorAll('li');
var nextBtn = document.getElementById('carousel_small-right')
var prevBtn = document.getElementById('carousel_small-left')
var startPos = 0;

function smallSliderRight() {
  startPos  = Math.max(startPos - width * count, -width * (listItems.length - count));
  listingSmall.style.marginLeft = startPos + 'px';

  console.log(marginSlideSmall)
  console.log(startPos)
}
nextBtn.addEventListener('click', smallSliderRight )

function smallSliderLeft() {
  startPos = Math.min(startPos + width * count, 0)
  listingSmall.style.marginLeft = startPos + 'px';

}
prevBtn.addEventListener('click', smallSliderLeft )

/*---------------------------------------------------------------------------*/

var kk = document.querySelector('.products__slide').offsetWidth

var widthSlide = kk;
var countSlide = 4; // количество слайдов
var carouselBig = document.getElementById('carousel_big');
var listingBig = carouselBig.querySelector ('ul');
var nextBtnBig = document.getElementById('carousel_big-right');
var startPosBig = 0;
var marginSlide = -(widthSlide * countSlide) ;
console.log(widthSlide)
function sliderRight() {
  startPosBig = Math.max(startPosBig - widthSlide);
  if (startPosBig == marginSlide ) {
    startPosBig = 0;
  }
  listingBig.style.marginLeft = startPosBig + 'px';
  
  console.log(marginSlide)
  console.log(startPosBig)
}

nextBtnBig.addEventListener('click', sliderRight )

/*-----------------*/

$(document).ready(function(){
  $('.slider').slick({
    dots: true
  });
});


/*---------------------------------------------------------------------------*/


  

  var tabs = document.querySelector('.tabs-header')
  function fTabs(event) {
    console.log(event)
    if (event.target.className == 'tab-h') {
      var dataTab = event.target.getAttribute('data-tab');
      var tabH = document.getElementsByClassName('tab-h');
      for (var i=0; i<tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      
      
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tabs-body__item');
      for (var i = 0; i < tabBody.length; i++) {
         if (dataTab==i) {
           tabBody[i].style.display = 'flex';
         } else {
          tabBody[i].style.display = 'none';
         }
      }
    }
  }
  

  tabs.addEventListener('click', fTabs)



var cartCount = document.getElementsByClassName("buy");
var shopCount = 0; 
 function updateShopCount() {
 shopCount = shopCount + 1;
  return shopCount;
 }
 
 function showShopCount() {
 document.getElementById("cart-count").innerHTML = shopCount;
 }
 
 function addToCartHandler() {
  updateShopCount()
  showShopCount()
  
 }
 
for (var i = 0; i < cartCount.length; i++) {
    cartCount[i].addEventListener('click', addToCartHandler)
}
console.log(shopCount);

console.log(cartCount)

