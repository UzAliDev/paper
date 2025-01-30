let requestCount = 0;
const choices = ["tosh", "qaychi", "qogoz"];

let currentUser = '';

function getRiggedChoice(userChoice) {
    requestCount++;
    let botChoice = "";

    if (requestCount % 3 === 1) {
        botChoice = {
            "tosh": "qaychi",
            "qaychi": "qogoz",
            "qogoz": "tosh"
        }[userChoice]; // User wins
    } else if (requestCount % 3 === 2) {
        botChoice = {
            "tosh": "qogoz",
            "qaychi": "tosh",
            "qogoz": "qaychi"
        }[userChoice]; // User loses
    } else {
        botChoice = userChoice; // Tie
    }
    return botChoice;
}

function displayResult(userChoice, botChoice) {
    const resultText = document.getElementById("result");
    const userChoiceElement = document.getElementById("user-choice");
    const botChoiceElement = document.getElementById("bot-choice");

    userChoiceElement.textContent = userChoice;
    botChoiceElement.textContent = botChoice;

    if (userChoice === botChoice) {
        resultText.textContent = "Tenglik! 🤝";
    } else if (
        (userChoice === "tosh" && botChoice === "qaychi") ||
        (userChoice === "qaychi" && botChoice === "qogoz") ||
        (userChoice === "qogoz" && botChoice === "tosh")
    ) {
        resultText.textContent = "Siz yutdingiz! 🎉";
    } else {
        resultText.textContent = "Siz yutqazdingiz! 😢";
    }
}

function login() {
    currentUser = document.getElementById('username').value;
    if (currentUser) {
        document.getElementById('user-login').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
    } else {
        alert("Iltimos, foydalanuvchi nomini kiriting.");
    }
}

document.getElementById("login-btn").addEventListener("click", login);

document.querySelectorAll(".choice-btn").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const botChoice = getRiggedChoice(userChoice);
        displayResult(userChoice, botChoice);
    });
});
