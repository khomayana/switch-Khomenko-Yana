let birthYear = prompt('What is your year of birh?');
let city = prompt('Which city do you live?');
let sport = prompt('What is your favourity sport?');
birthYear = Number(birthYear);
let messageBithYear;
switch (birthYear) {
    case 0:
        messageBithYear = 'Sadly, that you didn`t want to enter your year of birth =(';
        break;
    case birthYear:
        messageBithYear = `You are ${2023 - birthYear} years!`;
        break;
    default:
        messageBithYear = 'Sadly, that you didn`t want to enter your year of birth =(';
        break;
}
let messageCity;
switch (city) {
    case 'Kyiv':
        messageCity = 'You live in the capital of Ukraine!';
        break;
    case 'Washington':
        messageCity = 'You live in the capital of USA!';
        break;
    case 'London':
        messageCity = 'You live in the capital of UK!';
        break;
    case null:
        messageCity = 'Sadly, that you didn`t want to enter your city =(';
        break;
    case city:
        messageCity = `You live in ${city}!`;
        break;
    default:
        messageCity = 'Sadly, that you didn`t want to enter your city =(';
        break;
}
let messageSport;
switch (sport) {
    case 'football':
        messageSport = 'Wow! Do you want to be like Christiano Ronaldo?';
        break;
    case 'box':
        messageSport = 'Wow! Do you want to be like Oleksandr Usyk?';
        break;
    case 'gymnastics':
        messageSport = 'Wow! Do you want to be like Ganna Rizatdinova?';
        break;
    case null:
        messageSport = 'Sadly, that you didn`t want to enter your favourite sport =(';
        break;
    case sport:
        messageSport = `Wow! ${sport} is good sport!`;
        break;
    default:
        messageSport = 'Sadly, that you didn`t want to enter your favourite sport =(';
        break;
}
alert(`${messageBithYear} \n ${messageCity} \n ${messageSport}`) 
  

