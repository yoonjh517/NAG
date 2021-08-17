let supportOptionOne = document.querySelector('.support-option-1');
let supportOptionTwo = document.querySelector('.support-option-2');
let supportOptionThree = document.querySelector('.support-option-3');


let supportOptionDetailOne = document.querySelector('.support-option-1-detail');
let supportOptionDetailTwo = document.querySelector('.support-option-2-detail');
let supportOptionDetailThree = document.querySelector('.support-option-3-detail');


supportOptionOne.addEventListener('click',function(){
    supportOptionDetailOne.classList.toggle('show');
})
supportOptionTwo.addEventListener('click',function(){
    supportOptionDetailTwo.classList.toggle('show');
})
supportOptionThree.addEventListener('click',function(){
    supportOptionDetailThree.classList.toggle('show');
})
