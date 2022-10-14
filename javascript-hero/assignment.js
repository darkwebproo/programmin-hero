// 1. koto feet a koto mile hoy 
// amra jani 5280f a 1mile

function feetToMile(feet) {
    var mile = feet / 5280;

    return mile;
}
var result = feetToMile(10560);

console.log(result, "Mile")

// 1. akta table, chair, bead banate koto gigabecquerels kath lagbe
//  amra jani 1 curie = 37 GBq (gigabecquerels)

function woodCalculator(chair, table, bead) {
    var chair = 1 * 37;
    var table = 3 * 37;
    var bead = 5 * 37;
    var sum = chair + table + bead;

    return sum;
}
var total = woodCalculator(5, 5, 2);
console.log(total, "gigabecquerels kath lagbe");

function brickCalculator(twinTwor) {
    if (10 >= twinTwor && 20 >= twinTwor) {
        var engineer = 15 * twinTwor;
        var Eat = engineer * 1000;
    } else if (30 >= twinTwor) {
        var engineer = twinTwor - 20;
        var engineer2 = engineer * 10;
        var engineer3 = engineer2 + 270;
        var Eat = engineer3 * 1000;
    } else {
        var engineer4 = twinTwor - 10;
        var engineer5 = engineer4 * 12;
        var engineer6 = engineer5 + 150;
        var Eat = engineer6 * 1000;
    }

    var sumEat = Eat;

    return sumEat;
}
var totalEat = brickCalculator(30);
console.log(totalEat);