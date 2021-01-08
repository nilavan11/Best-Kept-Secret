const homeContent=document.querySelector(".home-content"),
button=document.querySelector(".btn-01"),
fullScore=document.querySelector(".full-score"),
yourScore=document.querySelector(".you-score"),
compScore=document.querySelector(".comp-score")
hands=document.querySelectorAll(".play-ground"),
ground=document.querySelectorAll(".play");
 
let total=0;
let runScored;
for (var i=0;i<hands.length;i+=1){
        hands[i].style.display = 'none';
      }
 function homeClose(){
    homeContent.style.display="none";
    fullScore.style.display="block";
    yourScore.style.display="block";
    compScore.style.display="block";
    for (var i=0;i<hands.length;i+=1){
       hands[i].style.display = 'block';
     }
 }
 function homeOpen(){
    homeContent.style.display="block";
    fullScore.style.display="block";
    yourScore.style.display="none";
    compScore.style.display="none";
    for (var i=0;i<hands.length;i+=1){
       hands[i].style.display = 'none';
     }
 }
function start(){
    button.addEventListener("click",(event)=>{
         homeClose();
         reset();
    })
}
function reset(){
     total=0;
     totalScore('0')
     youScore("0");
     comScore("0");
}
start(); 
function totalScore(total){
    fullScore.innerHTML=`<h3>${total}</h3>`
}
function youScore(yScore){
    yourScore.innerHTML=`<h2><span>You: </span> ${yScore}</h2>`
}
function comScore(cScore){
    compScore.innerHTML=`<h2><span>Computer: </span> ${cScore}</h2>`
}
hands.forEach((hand)=>{
 hand.addEventListener("click",(event)=>{
    const digit=event.target.getAttribute("data-number");
    runScored = Number(digit);
    total+=runScored;
    totalScore(total);
    youScore(runScored);
    compChoice();
     
})
})
function compChoice(){
    let cChoice=Math.floor(Math.random()*6)+1;
    comScore(cChoice);
    if(runScored === cChoice){
    totalScore("You have scored " +total+ " runs.");
    homeOpen();
     
    }
    
}
 
 
 