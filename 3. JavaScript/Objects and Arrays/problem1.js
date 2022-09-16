function mapChar(N) {
    // Write code here
    let s=97, e=123;
    for (let i=0; i<N; i++){
        console.log(String.fromCharCode(s)+"-"+(i+1))
        s++;
    }
}

let N=10;
mapChar(N);