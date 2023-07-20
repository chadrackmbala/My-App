let operation;
let firstName;
let answer;
let question;
let sumOfPoints = 0;
let coteArray = [];
let pourcentage;
let veracite;
let cote;
let message;
function userIdentity(user) {
    firstName = user;
}

userIdentity(prompt('Saisissez votre prénom svp !'));

for (let i = 0; i < 3; i++) {
    let signIndex = Math.floor(Math.random() * 4);
    let signsList = ['+', '/', '-', '*'];
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);

    switch (signIndex) {
        case 0:
            operation = firstNumber + secondNumber;
            question = 'Quelle est la somme de :';
            break;
        case 1:
            operation = firstNumber / secondNumber;
            question = 'Quel est le quotient de :';
            break;
        case 2:
            operation = firstNumber - secondNumber;
            question = 'Quel est le reste de :';
            break;
        case 3:
            operation = firstNumber * secondNumber;
            question = 'Quel est le produit de :';
            break;
        default:
            console.log(`Signe non compris`);
            break;
    }

    // let operationArray = [];
    // operationArray.push(firstNumber, signsList[signIndex], secondNumber);
    // console.log(operationArray);

    if (signIndex === 3) {
        signsList[signIndex] = 'X'
    }

    console.log(operation);

    function userAnswer(reponse) {
        answer = reponse;
        if (answer === operation) {
            veracite = true;
        } else {
            veracite = false;
        }

    }

    userAnswer(Number(prompt(`${firstName} ${question} ${firstNumber} ${signsList[signIndex]} ${secondNumber} ?`)));

    if (veracite) {
        coteArray.push(33);
        cote = 33;
    } else {
        coteArray.push(0);
        cote = 0;
    }
}

for (let i = 0; i < 3; i++) {
    ;
    sumOfPoints += coteArray[i]
}
console.log(sumOfPoints);
if (sumOfPoints === 0) {
    message = "☹️ Votre niveau est très faible, je vous recomande de faire beaucoups d'exercices !"
} else if (sumOfPoints > 0 && sumOfPoints < 34) {
    message = "Vous êtes en dessous de la moyenne, encore un peu d'effort ! 😊"
} else if (sumOfPoints > 34 && sumOfPoints < 66) {
    message = "Vous vous débrouillez bien !"
} else {
    message = "Félicitations !! 😃🥳🤗👏"
}

console.log(`${firstName} vous avez obtenu ${sumOfPoints} % ${message}`);
alert((`${firstName} vous avez obtenu ${sumOfPoints} % ${message}`));