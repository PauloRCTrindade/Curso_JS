function fat(n){
    var num = 1
    for(var c = n;c > 1;c--){
        num *= c
    }
    return num
}

//var res = fat(5)

console.log(fat(5))