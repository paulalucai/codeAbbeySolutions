var input = prompt("Enter your numbers: ");
var list = input.split(' ').map(Number);
var count = list[0];
var sum = 0;

for (var i = 1; i < list.length; i++) {
    sum += list[i];
}

console.log(sum);