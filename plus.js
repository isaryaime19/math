const drink = document.getElementById("sum")
const bread = document.getElementById("min")
const cupcake = document.getElementById("mult")

const quarter = document.getElementById("quarter")
const nickel = document.getElementById("nickel")
const dime = document.getElementById("dime")
const penny = document.getElementById("penny")

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")

const message = document.getElementById("message") 
const cantMoney = document.getElementById("cantmoney")
const sum = document.getElementById("sum")

var contSum = 0;
var contDime = 0;
var contNickel = 0;
var contPenny = 0;
var totalMunts 
var price
let amound


sum.addEventListener("click", function(){
    contSum += 1;
    amound = contSum + 1;
    one.textContent = amound;
    sumCoins();
})

dime.addEventListener("click", function(){
    contDime += 1;
    amound = (contDime * 0.10).toFixed(2);
    two.textContent = amound;
    sumCoins();
})

nickel.addEventListener("click", function(){
    contNickel += 1;
    amound = (contNickel * 0.05).toFixed(2);
    three.textContent = amound;
    sumCoins();
})

penny.addEventListener("click", function(){
    contPenny += 1;
    amound = (contPenny * 0.01).toFixed(2);
    four.textContent = amound;
    sumCoins();
})

function sumCoins(){
    sum.textContent ="€" + ((contQuarter*0.25)+(contDime*0.10)+(contNickel*0.05)+(contPenny*0.01)).toFixed(2);
}

drink.addEventListener("click", function(){
    price = 1.5;
    change()
})

bread.addEventListener("click", function(){
    price = 3.5;
    change()
})

cupcake.addEventListener("click", function(){
    price = 1.85;
    change()
})

donut.addEventListener("click", function(){
    price = 2.5;
    change()
})

function change(){
    let totalMunts = ((contQuarter*0.25)+(contDime*0.10)+(contNickel*0.05)+(contPenny*0.01)).toFixed(2)
    let totalChange = (totalMunts - price).toFixed(2);
    if (totalChange < 0) {
        message.textContent = "You don't have enoug money 💰 €" + totalChange + "  insert coins!!";
        message.classList.remove("green")
        message.classList.add("red") 
    } else {
        message.textContent = "Your change is 💰 €" + totalChange;
        message.classList.remove("red")
        message.classList.add("green") 
      RestoreValues();
    }
}

function RestoreValues() {
   contQuarter = 0;
   contDime = 0;
   contNickel = 0;
   contPenny = 0;
   sum.textContent = "";
   one.textContent = "";
   two.textContent = "";
   three.textContent = "";
   four.textContent = "";   
}

