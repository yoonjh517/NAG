// whats-on page carousel

let carouselPreBtn = document.querySelector('#carousel-preBtn');
let carouselNextBtn = document.querySelector('#carousel-nextBtn');
let slideContainer = document.querySelector('.whats-on-carousel-content');

var currentImg = 1;

carouselNextBtn.addEventListener('click', function(){
    if (currentImg < slideContainer.childElementCount){
        slideContainer.style.transform = "translateX(-" + currentImg + "00vw)";
        currentImg += 1;
    }
})

// carouselNextBtn.addEventListener('click', function(){
//     if (currentImg == 1) {
//         slideContainer.style.transform = "translateX(-" + currentImg + "00vw)";
//         currentImg = 2;
//     } else if (currentImg == 2) {
//         slideContainer.style.transform = "translateX(-" + currentImg + "00vw)";
//         currentImg = 3;
//     }
// })

carouselPreBtn.addEventListener('click', function(){
    if (currentImg > 1){
        slideContainer.style.transform = "translateX(-" + (currentImg-2) + "00vw)";
        currentImg -= 1;
    }
})

// carouselPreBtn.addEventListener('click', function(){
    
//     if (currentImg == 3) {
//         slideContainer.style.transform = "translateX(-" + (currentImg-2) + "00vw)";
//         currentImg -= 1;
//     } 
//     else if (currentImg == 2) {
//         slideContainer.style.transform = "translateX(-" + (currentImg-2) + "vw)";
//         currentImg = 1;
//     }
// })

// tour detail

let tourOptionOne = document.querySelector('.tour-option-1');
let tourOptionTwo = document.querySelector('.tour-option-2');
let tourOptionThree = document.querySelector('.tour-option-3');
let tourOptionFour = document.querySelector('.tour-option-4');

let tourOptionDetailOne = document.querySelector('.tour-option-1-detail');
let tourOptionDetailTwo = document.querySelector('.tour-option-2-detail');
let tourOptionDetailThree = document.querySelector('.tour-option-3-detail');
let tourOptionDetailFour = document.querySelector('.tour-option-4-detail');

tourOptionOne.addEventListener('click',function(){
    tourOptionDetailOne.classList.toggle('show');
})
tourOptionTwo.addEventListener('click',function(){
    tourOptionDetailTwo.classList.toggle('show');
})
tourOptionThree.addEventListener('click',function(){
    tourOptionDetailThree.classList.toggle('show');
})
tourOptionFour.addEventListener('click',function(){
    tourOptionDetailFour.classList.toggle('show');
})