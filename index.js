/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';

function getUserChoice() {
  const userName = readlineSync.question('Как тебя зовут?');
  console.log(`Здарова ${userName}!`);
  if (readlineSync.keyInYN('Сыграем в игру?')) {
    console.log('Отлично! Тогда:');
  } else {
    console.log('Иди отсюда, трус!');
    process.exit();
  }
  const choice = readlineSync.question('Выбери: камень, ножницы или бумага? ');
  if (choice !== 'камень' && choice !== 'ножницы' && choice !== 'бумага') {
    console.log('Такого нет в списке, посмотри внимательнее.');
    return getUserChoice();
  }
  return choice;
}

function getComputerChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  } if ((userChoice === 'камень' && computerChoice === 'ножницы')
             || (userChoice === 'ножницы' && computerChoice === 'бумага')
             || (userChoice === 'бумага' && computerChoice === 'камень')) {
    return 'Победа, победа - вместо обеда!';
  }
  return 'Ты лох! Машина оказалась лучше!';
}

function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`Ты выбрал:${userChoice}`);
  console.log(`Комп выбрал:${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
