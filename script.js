function rollDice(){
    const numDice = document.querySelector("#number-field").value;
    const showDice = document.querySelector("#dice-numbers");
    const imageArea = document.querySelector("#images");
    let value;

    let images = [];
    let diceNumbers = [];

    for(let i = 1;i<=numDice;i++){
        value = Math.floor(Math.random() * 6)+1
        diceNumbers.push(value);
        images.push(`<img src=icons/${value}.png alt=Dice ${value}>`);
    }

    if(numDice < 1 || numDice > 6){
        showDice.textContent = "Invalid Entry, number must be between 1 and 6"
    }else{
        showDice.textContent = `Dice: ${diceNumbers.join(",")}`;
        imageArea.innerHTML = images.join(" ");
    }
}