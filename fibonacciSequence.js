function fibonacciSeries(n) {
    let output = [];
    if (n===1) {
        output = [0];
    } else if ( n===2) {
        output = [0,1];
    }else {
        output= [0,1];
        for (let input = 2; input < n; input ++) {
            output.push(output[output.length - 2]+ output[output.length-1]);
        }
    }
    return output;
}

fibonacciSeries(10);
