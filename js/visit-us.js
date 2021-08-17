// booking detail

let bookingOptionOne = document.querySelector(".booking-option-1");
let bookingOptionTwo = document.querySelector(".booking-option-2");

let bookingOptionDetailOne = document.querySelector('.booking-option-1-detail');
let bookingOptionDetailTwo = document.querySelector('.booking-option-2-detail');

bookingOptionOne.addEventListener('click',function(){
    bookingOptionDetailOne.classList.toggle('show');
})
bookingOptionTwo.addEventListener('click',function(){
    bookingOptionDetailTwo.classList.toggle('show');
})