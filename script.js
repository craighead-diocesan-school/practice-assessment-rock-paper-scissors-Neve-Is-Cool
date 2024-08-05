function rockPaperScissors () {
    
    let attempts = [
        'paper',
        'scissors',
        'rock',
    ]

    let userAttempt = prompt ("Let's play a game; Paper, Scissors, Rock. Answer below with either 'paper', 'scissors' or 'rock'!")

    const randomGeneratorRange = 3
    let index = Math.floor (Math.random() *randomGeneratorRange)

    let computerAttempt = attempts[index]

    alert (computerAttempt + '!')
    
    if (userAttempt == computerAttempt) {
        alert('We tied! Try again')
    } else if (userAttempt == 'scissors' && computerAttempt == 'paper' || userAttempt == 'rock' && computerAttempt == 'scissors' || userAttempt == 'paper' && computerAttempt == 'rock') {
        alert('Congrats, you win!')
    } else if (userAttempt == 'paper' && computerAttempt == 'scissors' || userAttempt == 'rock' && computerAttempt == 'paper' || userAttempt == 'scissors' && computerAttempt == 'rock' ) {
        alert('You lose suckerrrr')
    } else {
        alert ('Invalid Response, please try again.')
    }

            


//What I need to do: Make an if for if they say rock paper scissors, all caps, lowercase use && to simplify this. And if the if equals scissors check if it wins or loses against my attempt. Eg. All scissors lose against rock and win against paper. First part is to make sure all slightly wrong answers work, and then check if they said scissors and i said rock make them lose but if they said scissors and i said rock make them win etc. See if this is actually the best way to do this otherwise SIMPLIFY it.

//I want to assign a different worth to all of the rock paper and scissors and then just say if the answer is less than that kind of thing.




}