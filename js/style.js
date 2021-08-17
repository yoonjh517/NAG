// nav-bar sub-menu click effect


// nav-bar button
let whatsOn = document.querySelector('#whatsOn');
let visitUs = document.querySelector('#visitUs');
let learn = document.querySelector('#learn');
let support = document.querySelector('#support');
// sub-menu container
let subMenuContainer = document.querySelector('.sub-menu-container');
// sub-menu
let whatsOnSubMenu = document.querySelector('.whats-on-sub-menu');
let visitUsSubMenu = document.querySelector('.visit-us-sub-menu');
let learnSubMenu = document.querySelector('.learn-sub-menu');
let supportSubMenu = document.querySelector('.support-sub-menu');

//functions
whatsOn.addEventListener('click', function(){
    if (subMenuContainer.style.display == ''){
        subMenuContainer.style.display = 'block';
        visitUsSubMenu.style.display = '';
        whatsOnSubMenu.style.display = 'block';
    } else if ( subMenuContainer.style.display == 'block' && visitUsSubMenu.style.display == 'block'){
        visitUsSubMenu.style.display = '';
        whatsOnSubMenu.style.display = 'block';
    } else if ( subMenuContainer.style.display == 'block' && learnSubMenu.style.display == 'block'){
        learnSubMenu.style.display = '';
        whatsOnSubMenu.style.display = 'block';
    } 
    else if ( subMenuContainer.style.display == 'block' && supportSubMenu.style.display == 'block'){
        supportSubMenu.style.display = '';
        whatsOnSubMenu.style.display = 'block';
    } 
    else {
        subMenuContainer.style.display = '';
        whatsOnSubMenu.style.display = '';
    }
});

visitUs.addEventListener('click', function(){
    if (subMenuContainer.style.display == ''){
        subMenuContainer.style.display = 'block';
        whatsOnSubMenu.style.display = '';
        visitUsSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && whatsOnSubMenu.style.display == 'block') {
        whatsOnSubMenu.style.display = '';
        visitUsSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && learnSubMenu.style.display == 'block') {
        learnSubMenu.style.display = '';
        visitUsSubMenu.style.display = 'block';
    } else if ( subMenuContainer.style.display == 'block' && supportSubMenu.style.display == 'block'){
        supportSubMenu.style.display = '';
        visitUsSubMenu.style.display = 'block';
    } 
    else {
        subMenuContainer.style.display = '';
        visitUsSubMenu.style.display = '';
    }
});

learn.addEventListener('click', function(){
    if (subMenuContainer.style.display == ''){
        subMenuContainer.style.display = 'block';
        whatsOnSubMenu.style.display = '';
        visitUsSubMenu.style.display = '';
        learnSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && whatsOnSubMenu.style.display == 'block') {
        whatsOnSubMenu.style.display = '';
        learnSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && visitUsSubMenu.style.display == 'block') {
        visitUsSubMenu.style.display = '';
        learnSubMenu.style.display = 'block';
    } else if ( subMenuContainer.style.display == 'block' && supportSubMenu.style.display == 'block'){
        supportSubMenu.style.display = '';
        learnSubMenu.style.display = 'block';
    } 
    else {
        subMenuContainer.style.display = '';
        learnSubMenu.style.display = '';
    }
});

support.addEventListener('click', function(){
    if (subMenuContainer.style.display == ''){
        subMenuContainer.style.display = 'block';
        whatsOnSubMenu.style.display = '';
        visitUsSubMenu.style.display = '';
        supportSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && whatsOnSubMenu.style.display == 'block') {
        whatsOnSubMenu.style.display = '';
        supportSubMenu.style.display = 'block';
    } else if(subMenuContainer.style.display == 'block' && visitUsSubMenu.style.display == 'block') {
        visitUsSubMenu.style.display = '';
        supportSubMenu.style.display = 'block';
    } else if ( subMenuContainer.style.display == 'block' && learnSubMenu.style.display == 'block'){
        learnSubMenu.style.display = '';
        supportSubMenu.style.display = 'block';
    } 
    else {
        subMenuContainer.style.display = '';
        supportSubMenu.style.display = '';
    }
});

// submenu close button

let subMenuCloseBtn = document.querySelector('#sub-menu-close-btn');

subMenuCloseBtn.addEventListener('click', ()=>{
    subMenuContainer.style.display = '';
    whatsOnSubMenu.style.display = '';
    visitUsSubMenu.style.display = '';
    learnSubMenu.style.display = '';
    supportSubMenu.style.display = '';
})

// mobile submenu open and close

let mSubMenuOpen = document.querySelector('#m-sub-menu-open');
let mSubMenuClose = document.querySelector('#m-sub-menu-close');
let mSubMenuContainer = document.querySelector('.mobile-sub-menu-container');

// open function
mSubMenuOpen.addEventListener('click', ()=>{
    mSubMenuContainer.style.display = 'block';
    mSubMenuOpen.style.display = 'none';
    mSubMenuClose.style.display = 'block';
})
// close function
mSubMenuClose.addEventListener('click', ()=>{
    mSubMenuContainer.style.display = 'none';
    mSubMenuOpen.style.display = 'block';
    mSubMenuClose.style.display = 'none';
})


// sub-menu-conatiner 의 display 가 block 일 때 화면을 760px 아래로 줄였다가 다시 키우면 sub-menu-container 가 다시 block 인 채로 나타난것ㅇ르 고침


// Create a condition that targets viewports at least 1092px wide
const mediaQuery = window.matchMedia('(min-width: 992px)')

function handleScreenWidthChange(e) {
  if (e.matches) {
    mSubMenuContainer.style.display = 'none';
    mSubMenuOpen.style.display = 'block';
    mSubMenuClose.style.display = 'none';
}};

mediaQuery.addEventListener('change', handleScreenWidthChange);

// sub-menu-container 열려있는 채로 화면 줄였다 다시 늘렸을 때, sub-menu-container 창이 닫히지 않고 그대로 있어서 고침

const desktopToMobile = window.matchMedia('(max-width: 992px')

function closeMobileSubContainer(e) {
    subMenuContainer.style.display = 'none';
}

desktopToMobile.addEventListener('change', closeMobileSubContainer);



// mobile sub menu - sub menu

let mobileWhatsOn = document.querySelector('#mobile-whats-on');
let mobileVisitUs = document.querySelector('#mobile-visit-us');
let mobileLearn = document.querySelector('#mobile-learn');
let mobileSupport = document.querySelector('#mobile-support');

let mobileWhatsOnSub = document.querySelector('.mobile-whats-on-sub');
let mobileVisitUsSub = document.querySelector('.mobile-visit-us-sub');
let mobileLearnSub = document.querySelector('.mobile-lear-sub');
let mobileSupportSub = document.querySelector('.mobile-support-sub');


function showSub () {
    
    if (mobileWhatsOnSub.classList.contains('show')){
        mobileWhatsOnSub.classList.remove('show');
    } else {
        mobileWhatsOnSub.classList.add('show');
    }
}

function showSubVisit() {
    if (mobileVisitUsSub.classList.contains('show')){
        mobileVisitUsSub.classList.remove('show');
    } else {
        mobileVisitUsSub.classList.add('show');
    }
}

function showSubLearn() {
    if (mobileLearnSub.classList.contains('show')){
        mobileLearnSub.classList.remove('show');
    } else {
        mobileLearnSub.classList.add('show');
    }
}

function showSubSupport() {
    if (mobileSupportSub.classList.contains('show')){
        mobileSupportSub.classList.remove('show');
    } else {
        mobileSupportSub.classList.add('show');
    }
}




