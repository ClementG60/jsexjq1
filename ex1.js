function computerChoose() {
    let computer = Math.floor(Math.random () * 3) + 1
    let computerChoice = ""
    if (computer == 1) {
        computerChoice = "pierre"
    } else if (computer == 2) {
        computerChoice = "feuille"
    } else {
        computerChoice = "ciseaux"
    }
    return computerChoice
}

function main() {
    let choice1 = userChoice.value
    let choice2 = computerChoose()
    let result = ""
    if (choice1 == choice2) {
        result = "Egalité"
    } else if ((choice1 == "pierre" && choice2 == "ciseaux") || (choice1 == "feuille" && choice2 == "pierre") || (choice1 == "ciseaux" && choice2 == "feuille")) {
        result = "Gagné"
    } else {
        result = "Perdu"
    }
    document.getElementById("result").innerText = "Resultat : " + result + ". L'ordinateur avait choisi " + choice2 + "."
    $("#result").css("font-weight", "bold")
}


