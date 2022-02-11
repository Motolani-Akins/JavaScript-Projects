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

//Challenge 3
//Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
   // console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results)

    message = finalMessage(results); //{'message': 'You Won!' 'color': 'green'}
    console.log(message);
     
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5){
        return {'message': 'You Tied', 'color': 'yellow'};
    }
    else{
        return{ 'message': 'You Won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remover all the images from the screen
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement ('div');
    var botDiv = document.createElement ('div');
    var messageDiv = document.createElement ('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)';>"
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage ['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)';>"

    document.getElementById('flexbox-rps-div').appendChild(humanDiv)
    document.getElementById('flexbox-rps-div').appendChild(messageDiv)
    document.getElementById('flexbox-rps-div').appendChild(botDiv)
}

//Change The Color Of All Buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons)

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonsRed();
    } else if (buttonThingy.value === 'green'){
        buttonsGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
        all_buttons[i].classList.add(choices[randomNumber]);
    }

}