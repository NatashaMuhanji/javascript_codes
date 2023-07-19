function beerBottles(){
    let num = 99;
    while (num>=0) {
    if (num >=2) {
        console.log(num+" bottles of beer on the wall, "+num+" bottles of beer. Take 1 round, "+num+" bottles of beer on the wall.");
    } else if (num === 1) {
        console.log(num+" bottle of beer on the wall, "+num+" bottle of beer. Take 1 round, no more bottles of beer on the wall.");
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy more, 99 bottles of beer on the wall.");
    }
    num --;
}
    
}

beerBottles();
