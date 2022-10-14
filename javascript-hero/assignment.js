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

function it_cantulator(tala) {
    if (tala <= 10) return 1000 * 15 * tala
    if (tala <= 20) return 1000 * 12 * (tala - 10) + 150000
    if (tala <= 30) return 1000 * 10 * (tala - 20) + 270000
}
console.log(it_cantulator(15));