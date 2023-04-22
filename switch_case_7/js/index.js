let numOrStr = prompt('input number or string');
switch (true){
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    case Number.isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('Ok!');
        break;
        
}