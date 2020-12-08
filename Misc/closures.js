var counter = 0;
var add = (function() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  })();

add();
add();
add();

console.log(counter);


