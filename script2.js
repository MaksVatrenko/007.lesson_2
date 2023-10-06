// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
function pow(num, degree) {
    if (degree === 1) {
        return num;
    }else if (degree < 1) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}

let num = prompt('Enter number');
let degree = prompt('Enter degree');

alert(pow(num, degree));