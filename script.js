let players = [
 ]

function rockPaperScissors () {
    
    let attempts = [
        'paper',
        'scissors',
        'rock',
    ]
    //Array contains options for the 'computer' to generate and use as their attempt.

    let numOfAttempts = 0
    let userScore = 0
    let computerScore = 0
    let numOfTies = 0
    //Allows all of these variables to be automatically set to zero, so numbers can be added that reflect the score of the game.

    let usersName = prompt ('What is your name?')


    while (numOfAttempts<3) {

        const randomGeneratorRange = 3
        let index = Math.floor (Math.random() *randomGeneratorRange)
        let computerAttempt = attempts[index]
        //Generates random attempt out of three within the array and assigns it to the variable name 'computerAttempt'.

        let userAttempt = prompt ("Let's play a game; Paper, Scissors, Rock & Best out of three! Answer below with either 'paper', 'scissors' or 'rock'!")
        userAttempt = userAttempt.toLowerCase()
        userAttempt = userAttempt.trim()
        //Assigns input from the user to the variable name 'userAttempt' and automatically removes possible spaces in the whitespace of their string and converts their attempt to lowercase to include a wider range of inputs.

        alert (computerAttempt + ' is my attempt!')
        //Allows the user to see the generated array attempt that was selected as the computers attempt.
        
        if (userAttempt == computerAttempt) {
            alert('We tied! Keep going!')
            numOfTies = numOfTies + 1
            //If the user's attempt is equal to the generated computers attempt, it outputs the message 'We tied! Try again' to the user and adds 1 to the number of ties for the scoreboard.
        } else if (
            userAttempt == 'scissors' && computerAttempt == 'paper' || 
            userAttempt == 'rock' && computerAttempt == 'scissors' || 
            userAttempt == 'paper' && computerAttempt == 'rock') {
            alert('Congrats, you win!') 
            userScore = userScore + 1
            //If the user's attempt beats the generated computers attempt, it will output the message 'Congrats, you win!' and add 1 to the user's score.
        } else if (
            userAttempt == 'paper' && computerAttempt == 'scissors' || 
            userAttempt == 'rock' && computerAttempt == 'paper' || 
            userAttempt == 'scissors' && computerAttempt == 'rock' ) {
            alert('You lose suckerrrr')
            computerScore = computerScore + 1
            //If the generated array attempt will beat the user's attempt, it will output the message, 'You lose suckerrrr' and will add 1 to the computers score.
        } else {
            alert ('Invalid Response, please try again.')
            numOfAttempts = numOfAttempts - 1
            //If the input of the user is invalid eg. Banana or Scissor or 2, it will output this message to the user, it then takes one away from the number of attempts -- allowing the user to have the full amount of their attempts.
        }

        numOfAttempts = numOfAttempts + 1
        //Increases the number of attempts for each round, allowing for three rounds and no more. 

    }

    if (computerScore>userScore) {
        alert ('You had a score of ' + userScore + ', I had a score of ' + computerScore + ' and we had ' + numOfTies + ' games tied, so I win!!!! AND YOU LOSE')
        players.push('Computer - Winner')
        //If the user's score is greater than the computer's score, it will output this message which also informs the user of the score in the three matches.
    } else if (computerScore<userScore) {
        alert ('Congrats, you win!!! You had a score of ' + userScore + ', I had a score of ' + computerScore + ' and we had ' + numOfTies + ' games tied :)')
        players.push(usersName + ' - Winner')
        //If the user's score is less than the computer's score, it will output this message which also informs the user of the score in the three matches.
    } else if (computerScore == userScore) {
        alert ('We tied overall!! You had a score of ' + userScore + ', I had a score of ' + computerScore + ' and we had ' + numOfTies + ' games tied')
        players.push('Draw')
        //If the overall score is a draw; eg. user wins one, computer wins one, one tie, it will output this message and add 'draw' to the leaderboard.
    } else {
        alert ('This match was invalid, please try the game again.')
        //If there was an error with the match, this message will output to the user.
    }
}


function showScoreboard () {
    let arrayLength = players.length
    let count = 0
    let scoreBoard = ''
    while (count<arrayLength) {
        scoreBoard = scoreBoard + players[count] + ', '
        count = count + 1
    }
    alert ('The Scoreboard is...' + scoreBoard)
}

//What i want to do: when it's invalid -- do output the computers attempt before telling them.

//Currently if I add a space or a comma, it only comes after the entire array.