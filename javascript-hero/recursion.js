 function factorialRecursive(num) {
     if (num == 1) {
         return 1;
     } else {
         return num * factorialRecursive(num - 1);
     }
 }
 console.log(factorialRecursive(5));