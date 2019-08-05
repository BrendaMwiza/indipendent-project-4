function order(size, crust, toping, number, price){
    this.sizes = size;
    this.crustName = crust;
    this.topings = toping;
    this.desiredNumber = number;
    this.correspondingPrice = price;
    this.addItAll = function() {
        return this.correspondingPrice;
    }
};

var smallSize = new order("small", "crust", "toping", "number", "$12");

var mediumSize = new order("medium", "crust", "toping", "number", "$14");
var largeSize = new order("large", "crust", "toping", "number", "$16");
var extraLargeSize = new order("extralarge", "crust", "toping", "number", "$30");
console.log(smallSize);
console.log(mediumSize);
console.log(largeSize);
console.log(extraLargeSize);



document.getElementById("submit").addEventListener("click", function() {
    var location = prompt("pease enter your location:", " ");
    var write;
    if (location == null || location == "") {
        write = "you cancelled order.";
      } else {
        alert("Hello " + "the amout you have to pay is" + this.addItAll );
      };
    
});