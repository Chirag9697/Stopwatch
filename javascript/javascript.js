const timer = document.getElementById('timer');
var startt=document.getElementById("starttimer");
var stopt=document.getElementById("stoptimer");
var reset=document.getElementById("resettimer");
// var reser
var sec="00";
var hr="00";
var min="00"; 
var sec1=0;
var min1=0;
var hr1=0;
function timercyc(){
   
      sec1+=1;
      if(sec1<10){
        sec='0'+sec1;
      }
     
      else if(sec1>60){
        sec="00";
        min1++;
        if(min1<10){
          min='0'+min1;
        }
        else if(min1>60){
          min="00";
          hr1++;
          if(hr1<10){
            hr='0'+hr1;
          }
          else{
            hr=hr1;
          }

        }
        else{
          min=min1;
        }
        sec1=0;
      }
      else{
        sec=sec1;
      }
      timer.innerText=`${hr}:${min}:${sec}`;
    
}
var myinterval1;
startt.addEventListener("click",()=>{
  myinterval1=setInterval(timercyc,1000);
});
stopt.addEventListener("click",()=>{
    clearInterval(myinterval1);
})
resettimer.addEventListener("click",()=>{
  timer.innerText="00:00:00";
  sec1=0;
  min1=0;
  hr1=0;
})