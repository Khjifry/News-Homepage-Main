const popularItems = document.querySelectorAll('.trending-item figure figcaption');
const popularItemImages = document.querySelectorAll('.trending-item figure img');
var highestPopularItem = 0;
for (let i = 0; i < popularItems.length; i++) {    
    if(popularItems[i].clientHeight > highestPopularItem){
        highestPopularItem = popularItems[i].clientHeight
    }
    else{
        highestPopularItem = highestPopularItem
    }
}
for (let i = 0; i < popularItemImages.length; i++) {
    popularItemImages[i].setAttribute('height', highestPopularItem)
}

const toggle = document.querySelector('.navbar .toggle');
const closeT = document.querySelector('.navbar .close');
const navbarList = document.querySelector('.navbar ul');
const navbarListItems = document.querySelectorAll('.navbar ul li a');
toggle.addEventListener('click', function(){
    toggle.classList.toggle('active')
    closeT.classList.toggle('active')
    navbarList.classList.toggle('active')
})
closeT.addEventListener('click', function(){
    toggle.classList.toggle('active')
    closeT.classList.toggle('active')
    navbarList.classList.toggle('active')
})
for (let i = 0; i < navbarListItems.length; i++) {
    navbarListItems[i].addEventListener('click', function(){
        toggle.classList.toggle('active')
        closeT.classList.toggle('active')
        navbarList.classList.toggle('active')
    })  
}