const options = ["Rock", "Paper", "Scissors"];
const generateRandomResponse = () => (Math.random() * 10).toFixed(0) % 3;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerScoreContainer = document.querySelector('#player h1');
const computerScoreContainer = document.querySelector('#computer h1');
const messageBox = document.querySelector('#message-box h1');

let playerScore = 0, computerScore = 0;

rock.addEventListener('click', () => game(0))
paper.addEventListener('click', () => game(1))
scissor.addEventListener('click', () => game(2))

const game = (option) => {
    const computerResponse = generateRandomResponse()
    switch (option) {
        case 0:
            switch (computerResponse) {
                case 0:
                    console.log("Draw")
                    messageBox.innerHTML = "It is a tie"
                    break;
                case 1:
                    console.log("Computer Wins")
                    rock.classList.add("lose");
                    setTimeout(()=>{
                        rock.classList.remove("lose");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} Computer wins !!`
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    break;
                case 2:
                    console.log("You win")
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You wins !!`
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                default:
                    break;

            }
            break;
        case 1:
            switch (computerResponse) {
                case 0:
                    console.log("You win")
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You wins !!`
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                case 1:
                    console.log("Draw")
                    messageBox.innerHTML = "It is a tie"
                    break;
                case 2:
                    console.log("Computer Wins")
                    rock.classList.add("lose");
                    setTimeout(()=>{
                        rock.classList.remove("lose");
                    },1000)
                    messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    break;
                default:
                    break;

            }
            break;
        case 2:
            switch (computerResponse) {
                case 0:
                    console.log("Computer Wins")
                    rock.classList.add("lose");
                    setTimeout(()=>{
                        rock.classList.remove("lose");
                    },1000)
                    messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`
                    computerScore++;
                    computerScoreContainer.innerHTML = computerScore;
                    break;
                case 1:
                    console.log("You win")
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You wins !!`
                    playerScore++;
                    playerScoreContainer.innerHTML = playerScore;
                    break;
                case 2:
                    console.log("Draw")
                    messageBox.innerHTML = "It is a tie"
                    break;
                default:
                    break;

            }
            break;
        default:
            break;
    }
}