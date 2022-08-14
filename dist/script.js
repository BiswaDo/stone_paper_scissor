function spc(){
  
  var choice = new Array("stone","paper","scissor");
  
  var randNum = Math.floor(Math.random()*choice.length);
  
  var randNum2 = Math.floor(Math.random()*choice.length);
  
  const p1 = document.getElementsByClassName("box")[0].innerHTML = choice[randNum];
  
  const p2 = document.getElementsByClassName("box")[1].innerHTML = choice[randNum2];
  
   if(p1===p2 ){
     document.getElementsByClassName("result")[0].innerHTML = "Tie";
     document.getElementsByClassName("result")[1].innerHTML = "Tie";
     
   }else if(( p1 === choice[0] && p2 === choice[1])||(p1===choice[1] && p2 === choice[2])||(p1===choice[2] && p2 ===choice[0])){
     document.getElementsByClassName("result")[0].innerHTML = "Lose";
     document.getElementsByClassName("result")[1].innerHTML = "Player2 Wins";
     
   }else if((p1 === choice[2] && p2 === choice[1])||(p1 === choice[1] && p2 === choice[0])||(p1===choice[0] && p2 ===choice[2])){
     document.getElementsByClassName("result")[0].innerHTML = "Player1 Wins";
     document.getElementsByClassName("result")[1].innerHTML = "Lose";
   }
}

document.getElementById("btn").addEventListener("click", sound);

function sound(){
  
  var audio = document.getElementById("audio");
  
  audio.play()
}