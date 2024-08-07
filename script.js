function rockPaperScissors () {
    
    let attempts = [
        'paper',
        'scissors',
        'rock',
    ]

    let numOfAttempts = 0
    let userScore = 0
    let computerScore = 0
    let numOfTies = 0

    while (numOfAttempts<3) {

        const randomGeneratorRange = 3
        let index = Math.floor (Math.random() *randomGeneratorRange)
        let computerAttempt = attempts[index]

        let userAttempt = prompt ("Let's play a game; Paper, Scissors, Rock & Best out of three! Answer below with either 'paper', 'scissors' or 'rock'!")
        userAttempt = userAttempt.toLowerCase()

        alert (computerAttempt + ' is my attempt!')
        
        if (userAttempt == computerAttempt) {
            alert('We tied! Try again')
            numOfTies = numOfTies + 1
        } else if (
            userAttempt == 'scissors' && computerAttempt == 'paper' || 
            userAttempt == 'rock' && computerAttempt == 'scissors' || 
            userAttempt == 'paper' && computerAttempt == 'rock') {
            alert('Congrats, you win!') 
            userScore = userScore + 1


        } else if (
            userAttempt == 'paper' && computerAttempt == 'scissors' || 
            userAttempt == 'rock' && computerAttempt == 'paper' || 
            userAttempt == 'scissors' && computerAttempt == 'rock' ) {
            alert('You lose suckerrrr')
            computerScore = computerScore + 1
            
        } else {
            alert ('Invalid Response, please try again.')
        }

        numOfAttempts = numOfAttempts + 1
    }

    if (computerScore>userScore) {
        alert ('You had a score of ' + userScore + ', I had a score of ' + computerScore + ' and we had ' + numOfTies + ' games tied, so I win!!!! AND YOU LOSE')
    } else if (computerScore<userScore) {
        alert ('Congrats, you win!!! You had a score of ' + userScore + ', I had a score of ' + computerScore + ' and we had ' + numOfTies + ' games tied :)')
    } else {
        alert ('This match was invalid, please try again.')
    }

 
//What I need to do, write comments and check with all versions of testing and mention within the commit.
}