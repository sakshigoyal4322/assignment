//selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const day = document.getElementById("day");
// shift+alt+down arrow to duplicate code
//Event Handler

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//Functions
function showtime()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec  = today.getSeconds();
    let date = today.toDateString();

    // AM PM Format
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 Hrs format
    hour = hour%12 || 12; 

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    day.innerHTML = `${date}`;

    setTimeout(showtime,1000);
}
function addZero(n)
{
    return ((parseInt(n,10)<10 ? '0' : '')+n);
}

function setGreeting()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour<12){
        document.body.style.background = 'url("morning.jpg")';
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else if(hour<18){
        document.body.style.background = 'url("afternoon.jpg")';
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }
    else{
        document.body.style.background = 'url("night.jpg")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.innerHTML = "Good Evening";
        document.body.style.color = "yellow";
    }
}

function getName(){
    if(localStorage.getItem('myName')===null){
        name.innerHTML = 'Enter Name';
    }
    else{
        name.innerHTML = localStorage.getItem('myName');
    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode===13){
            localStorage.setItem('myName',e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem('myName',e.target.innerHTML);
    }
}
//Function call
showtime();
setGreeting();
getName();