function printRange(a, b, c){
    var range = b - c;
    for (var i = a; i <= range; i++) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
printRange(2, 10, 2);
