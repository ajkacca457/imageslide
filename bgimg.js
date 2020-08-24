const background=document.querySelector(".bgimg");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
let count=1;

next.addEventListener("click",function(){
  background.style.background=`url(${count}.jpg)`;
  background.style.backgroundSize="cover";
  count++;
  background.animate([{opacity:".1"},{opacity:"1"}],{
    duration:500,fill:"forwards"
  })
 if (count>6){
   count=1;
 }
})

prev.addEventListener("click",function(){
  background.style.background=`url(${count}.jpg)`;
  background.style.backgroundSize="cover";
  count--;
  background.animate([{opacity:".1"},{opacity:"1"}],{
    duration:500,fill:"forwards"
  })
 if (count<1){
   count=6;
 }
})
