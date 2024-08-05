let attemps = [
    'paper',
    'scissors',
    'rock',
]

function rockPaperScissors () {
    randomGeneratorRange = 3
    let index = Math.floor (Math.random() *randomGeneratorRange)
    
    
    let userAttempt = prompt ("Let's play a game; Paper, Scissors, Rock. Answer below with either 'paper', 'scissors' or 'rock'!")


    if (attemps[index] = userAttempt) {
        alert('We tied! Try again')
    } else if (attempts[index] =! userAttempt) {
        alert('Someone won / lost')
    }
            


//What I need to do: Make an if for if they say rock paper scissors, all caps, lowercase use && to simplify this. And if the if equals scissors check if it wins or loses against my attempt. Eg. All scissors lose against rock and win against paper. First part is to make sure all slightly wrong answers work, and then check if they said scissors and i said rock make them lose but if they said scissors and i said rock make them win etc. See if this is actually the best way to do this otherwise SIMPLIFY it.




    while (userAttempt != attempts[index] ) {
        
    }



        alert ('Congrats you won with your guess of' + userAttempt + ' against my attempt of ' +attempts[index] )

}