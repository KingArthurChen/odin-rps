function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10 / 3);
    while (choice == 0)
    {
        choice = Math.floor(Math.random() * 10 / 3);
    }
    switch (choice) {
        case 1: return 1;
            break;
        case 2: return 2;
            break;
        case 3: return 3;
            break;
    }
}

function getPlayerChoice() {
    let playerHasChosen = false;
    let choice = ''
    while (playerHasChosen === false) {
        choice = prompt(`Type a number to play:
                            1 - Rock
                            2 - Paper
                            3 - Scissors`);
        if (choice > 0 && choice < 4)
        {
            playerHasChosen = true;
        }
    }
    switch (choice) {
        case "1": return 1;
            break;
        case "2": return 2;
            break;
        case "3": return 3;
            break;
    }
}

function selectWinner(playerChoice, computerChoice) {
    let winner = '';
    switch (playerChoice + computerChoice) {
        case 1: console.log("Math error occured. Total should not be 1.");
            console.log(playerChoice);
            console.log(computerChoice);
            break;
        case 2: console.log(`It's a Tie! Both the player and computer threw rock!`);
            break;
        case 3: winner = (playerChoice > computerChoice) ? "Player" : "Computer";
            console.log(`The winner is: ${winner}! Paper beats rock! `);
            break;
        case 4: draw = (playerChoice === computerChoice) ? true : false;
            if (draw === false) {
                winner = (playerChoice > computerChoice) ? "Computer" : "Player";
                console.log(`The winner is: ${winner}! Rock beats scissors! `);
            } else { console.log("It was a tie! Both player and computer threw paper!"); return 'Draw';}
            break;
        case 5: winner = (playerChoice > computerChoice) ? "Player" : "Computer";
            console.log(`The winner is: ${winner}! Scissors beats paper! `);
            break;
        case 6: console.log("It's a draw! Both player and computer threw scissors!");
            return 'Draw';
            break;
    }
    return winner;
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let winner = selectWinner(playerChoice, computerChoice);
        if (winner === "Player") {
            playerCount++;
        } else if (winner === 'Draw') {
            playerCount += 0;
            computerCount += 0;
        } 
        else {
            computerCount++;
        }
        console.log(`The current score right now is...
                    Player: ${playerCount}
                    Computer: ${computerCount}`);
    }
    if (playerCount > computerCount)
    {
        console.log(`The overall winner is Player with ${playerCount} points!`);
    } else { console.log(`The overall winner is Copmuter with ${computerCount} points!`); }
}

game();

