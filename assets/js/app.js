
$(document).ready(function(){ 
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,        
    autoplay:true,
    dots:true,
    infinity:true,
    autoplaySpeed: 2000,
    pauseOnHover:true,
    draggable:true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    //trigger after the slide appears
    // i is current slide index
    onAfterChange:function(slickSlider,i){
         //remove all active class
         $('.slider-nav .slick-slide').removeClass('slick-active');
         //set active class for current slide
         $('.slider-nav .slick-slide').eq(i).addClass('slick-active');         
     }

});
//set active class to first slide
$('.slider-nav .slick-slide').eq(0).addClass('slick-active');
$('.slider-nav').slick({
        slidesToShow: 3,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,});

var cong = document.querySelector(".quantity-area .btn-subtract")
var tru = document.querySelector(".quantity-area  .btn-add");
var kq = document.querySelector(".quantity-area  .item-quantity");


const minimum = 1;
cong.addEventListener("click", function(){
    if (kq.value <= minimum) {
        cong.disabled = true;
        return; // return to avoid decrementing
    } else {
        cong.disabled = false;
    }
    kq.value--;
});

tru.addEventListener("click", function() {
    if (kq.value > minimum) {
        cong.disabled = false;
    }
    kq.value++;
        });
$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
  });
  function showPWD(){
    var pass=document.getElementById('passwd');
    if (pass.type === 'password'){
        pass.type = 'text'}
    else{
        pass.type = 'password'
    }    
  }; 
  $('#showpass').on('change', function(){
    $('#passwd').attr('type',$('#showpass').prop('checked')==true?"text":"password"); 
});  

});
