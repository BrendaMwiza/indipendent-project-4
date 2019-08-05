function order(size, crust, toping, number, price){
    this.sizes = size;
    this.crustName = crust;
    this.topings = toping;
    this.desiredNumber = number;
    this.correspondingPrice = price;
    
};

var smallSize = new order("small", "crust", "toping", "number", "12");
var mediumSize = new order("medium", "crust", "toping", "number", "14");
var largeSize = new order("large", "crust", "toping", "number", "16");
var extraLargeSize = new order("extralarge", "crust", "toping", "number", "30");
console.log(smallSize);
console.log(mediumSize);
console.log(largeSize);
console.log(extraLargeSize);


var crustName = $("select#crust").val();
var topings = $("select#toping").val();
var number = $("select#number").val();



document.getElementById("submit").addEventListener("click", function() {
    var location = prompt("pease enter your location:", " ");
    
    var size = $("select#size").val();
    if(size === "small"){
        alert("Hello" +" "+ "the amout you have to pay is"+" "+  "$" + smallSize.correspondingPrice );

    }
    else if(size === "medium"){
        alert("Hello " +" "+ "the amout you have to pay is" +" "+ "$" + mediumSize.correspondingPrice );

    }
    else if(size === "large"){
        alert("Hello " +" "+  "the amout you have to pay is" +" "+ "$" + largeSize.correspondingPrice );

    }
    else if(size === "extraLarge"){
        alert("Hello " +" "+  "the amout you have to pay is" +" "+ "$" + extraLargeSize.correspondingPrice );

    }
    else if(location == null || location == ""){
        alert("You canceled the order");
    }
    else{
        alert("You made no choice!")
    }
        

});
    
    