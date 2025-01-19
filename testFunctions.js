//Задача 1
function computer (number) {
    const lastTwoDigits = number%100;
    const lastDigit = number%10;
    const comp = "компьютер";
    if(lastTwoDigits >= 11 & lastTwoDigits <= 14)
        return number + " " + comp + "ов";
    if(lastDigit == 1) return number + " " + comp;
    else if(lastDigit >= 2 & lastDigit <= 4)
        return number + " " + comp + "а";
    else return number + " " + comp + "ов";
}
//Задача 2
function commonDividers (...numbers) {
    const min = Math.min(...numbers);
    let result = [];
    main: for(let i = 2; i <= min; i++){
        for(let j = 0; j < numbers.length; j++)
            if(numbers[j] % i != 0) continue main;
        result.push(i);
    }
    return result;
}
//Задача 3
function primeNumbers(min, max) {
    let array = [];
    numbers: for(let i = min; i <= max; i++){
        for(let j = 2; j < i; j++)
            if(i % j == 0) continue numbers;
        array.push(i);
    }
    return array;
}
//Задача 4
function multiplicationTable(bound){
    for (let h = 0; h <= bound; h++) {
        let line = "";
        for (let w = 0; w <= bound; w++) {
            if (h == 0 && w == 0) line += " \t";
            else if (h == 0) line += w + "\t";
            else if (w == 0) line += h + "\t";
            else line += (w * h) + "\t";
        }
        console.log(line);
    }
}
console.log(computer(111));
console.log(commonDividers(42,12,18));
console.log(primeNumbers(11,20));
multiplicationTable(7);