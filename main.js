//DOM elements

const time=document.getElementById('time'),
    greeting=document.getElementById('greeting'),
    name=document.getElementById('name'),
    focus=document.getElementById('focus');

//show time
function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();
    
    //Set am or pm 

    const amPm=hour>=12 ? 'PM':'AM';

    //12 hour Format

    hour=hour% 12 || 12;

    //output time

    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span></span> ${amPm}`;

    setTimeout(showTime,1000)
}

// add zero funtion
 function addZero(n){
     return (parseInt(n,10)<10?'0':'')+n;
 }

 //set bg and greeting
 function setBg(){
     let today=new Date(),
     hour=today.getHours();

     if(hour<12){
         //morning
         document.body.style.backgroundImage="url(mr.jpg)";
         greeting.textContent='Good Morning';
     }
     else if(hour<18){
         //afternoon
         document.body.style.backgroundImage="url(af.jpg)";
         greeting.textContent='Good Afternoon';
     }
     else{
         //night
         document.body.style.backgroundImage="url(n.jpg)";
         greeting.textContent='Good Night';
         document.body.style.color='white';
     }
 }

 //get name
 function getname(){
     if(localStorage.getItem('name')===null){
         name.textContent='[Enter name]';
        }
    else{
        name.textContent=localStorage.getItem('name');
    }
 }

 // set name 

 function setName(e){
     if(e.type==='keypress'){
         //make sure enter is pressed
         if(e.which == 13 || e.keycode==13)
         {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
         }

     }
     else{
         localStorage.setItem('name',e.target.innerText);
     }
 }

 //get focus
 function getfocus(){
     if(localStorage.getItem('focus')===null){
         focus.textContent='[Enter focus]';
        }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
 }

 name.addEventListener('keypress',setName);
 name.addEventListener('blur',setName);
//run 
showTime();
setBg();
getname();
getfocus();