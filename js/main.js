function sliderInit(){$('.reviews-slider').slick({prevArrow:$('.reviews-arrow_prev'),nextArrow:$('.reviews-arrow_next'),responsive:[{breakpoint:1024,settings:{adaptiveHeight:!0}}]});}function delimiter(price){for(let i=0;i<price.length;i++)price[i].textContent=price[i].textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g,'$1.');}function ready(){delimiter(oldPrice),delimiter(newPrice),document.documentElement.clientWidth<480?window.addEventListener('scroll',function(){return setTimeout(sliderInit,1000);},{once:!0,passive:!0}):sliderInit();}const oldPrice=document.querySelectorAll('.x_price_previous');const newPrice=document.querySelectorAll('.x_price_current');document.addEventListener('DOMContentLoaded',ready);