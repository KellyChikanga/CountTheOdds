let sum = 0

function CountTheOdds(num) {
    if (num < 1) {
        return 0
    }
    while (num >= 1) {
        if (num % 2 === 1) {
            sum += num;
        } else {
            sum = sum;
        } 
        num--
    } return sum
}