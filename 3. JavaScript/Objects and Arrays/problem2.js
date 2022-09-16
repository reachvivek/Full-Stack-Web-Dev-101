function mapCharAgain(N) {
    // Write code here
    let s=97, e=123;
    for(s; s!==e; s++){
        console.log(String.fromCharCode(s)+"-"+N);
        N++;
    }
}

let N=10;
mapCharAgain(N);