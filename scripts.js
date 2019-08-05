function order(size, crust, toping, number, price){
    this.sizes = size;
    this.crustName = crust;
    this.topings = toping;
    this.desiredNumber = number;
    this.correspondingPrice = price;
}

var smallSize = new order("small", "crust", "toping", "number", $12);
var mediumSize = new order("medium", "crust", "toping", "number", $14);
var largeSize = new order("large", "crust", "toping", "number", $16);
var extraLargeSize = new order("extralarge", "crust", "toping", "number", $30);
