let learnOptionOne = document.querySelector('.learn-option-1');
let learnOptionTwo = document.querySelector('.learn-option-2');
let learnOptionThree = document.querySelector('.learn-option-3');
let learnOptionFour = document.querySelector('.learn-option-4');

let learnOptionDetailOne = document.querySelector('.learn-option-1-detail');
let learnOptionDetailTwo = document.querySelector('.learn-option-2-detail');
let learnOptionDetailThree = document.querySelector('.learn-option-3-detail');
let learnOptionDetailFour = document.querySelector('.learn-option-4-detail');

learnOptionOne.addEventListener('click',function(){
    learnOptionDetailOne.classList.toggle('show');
})
learnOptionTwo.addEventListener('click',function(){
    learnOptionDetailTwo.classList.toggle('show');
})
learnOptionThree.addEventListener('click',function(){
    learnOptionDetailThree.classList.toggle('show');
})
learnOptionFour.addEventListener('click',function(){
    learnOptionDetailFour.classList.toggle('show');
})