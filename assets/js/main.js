/** SHOW DATE ON HEADER */
const showDate = document.querySelector('#date');
var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

showDate.innerText = date;

/** SHOW TIME ON HEADER */
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    hour = updateTime(hour);
    min = updateTime(min);
    document.getElementById("clock").innerText = hour + " : " + min; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime(); /* calling currentTime() function to initiate the process */

// const dropdown = document.querySelectorAll('.main-menu-list');
const dropdown = document.querySelectorAll('.menu-dropdown');

// SHOW HIDE SIDEBAR VARIABLES
const sidebar = document.querySelector('.side-nav');
const menuIcon = document.querySelector('.mm-icon');
const closebtn = document.querySelector('.close-btn');

menuIcon.addEventListener('click', showSidebar);
closebtn.addEventListener('click', hideSidebar);

// window.addEventListener('click', hideSidebar);

function showSidebar() {
    sidebar.classList.add('show');
}

function hideSidebar() {
    sidebar.classList.remove('show');
}

// parent = dropdown.parentElement.parentNode;
// console.log(parent)

dropdown.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('show');
    });
});


/** NICE SELECT INITIALIZATION */
$(document).ready(function() {
    $('select').niceSelect();
});


// DATE PICKER
$('.datepicker').datepicker();