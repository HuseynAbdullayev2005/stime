const roll_dice = document.querySelector(".roll_dice")
const game = document.querySelector(".game")
const playerOneScore = document.querySelector(".current_player_1")
const playertwoScore = document.querySelector(".current_player_2")
const hold = document.querySelector(".hold")


function getRandom() {
    let pictures = [1, 2, 3, 4, 5, 6]
    return Math.floor(Math.random() * pictures.length())

}

const diceNumber = document.createElement("div");
diceNumber.classList.add("dice_image")
game.appendChild(dice)
diceNumber.innerHTML = getRandom();






