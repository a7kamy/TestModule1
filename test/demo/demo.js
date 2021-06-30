/* code */


alert(factorial(5));






/* functions */

function alertMe() {
    alert(number1);
    alert(text);
}


function sum(num1, num2) {
    return num1 + num2;
}


function sumGreaterThanFive(num1, num2, num3, num4) {
    var sum = 0;
    if (num1 > 5 || num1 < 5) {
        sum += num1;
    }
    else {
        alert("there is five in the values");
    }

    if (num2 > 5 || num2 < 5) {
        sum += num2;
    }
    else {
        alert("there is five in the values");
    }

    if (num3 > 5 || num3 < 5) {
        sum += num3;
    }
    else {
        alert("there is five in the values");
    }

    if (num4 > 5 || num4 < 5) {
        sum += num4;
    }
    else {
        alert("there is five in the values");
    }

    return sum;
}

function CheckVArValue(num) {
    switch (num) {
        case 10:
            alert("number is 10");
            break;
        case 12:
            alert("number is 12");
            break;
        case 14:
            alert("number is 14");
            break;
        default:
            alert(num);
    }
}
