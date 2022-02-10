//Challenge 1: Your Age In Days

function ageInDays() {
    var birthYear = prompt ('What year were you born?');
    var ageToDays = (2022 - birthYear) * 365;
    console.log(ageToDays)
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageToDays + ' days old' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove(); 
}

//Challenge 2
//Cat Generator
function generateCat(){
   var image = document.createElement('img');
   var div = document.getElementById('flex-cat-gen');
   image.src = "http://thecatapi.com/api/images/get?format=src&size=small&type=gif";
   div.appendChild(image); 
}

function rpsGame(yourChoice){
    // var humanChoice, BotChoice;
    // humanChoice = yourChoice.id;
    //results = decideWinner(humanChoice, botChoice);
    //message = finalMessage(results)
    
}