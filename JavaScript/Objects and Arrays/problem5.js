function mapSymbols(N) {
    // Write code here
    let sym=['!','@','#','$','%','^','&','*']
    for(let i=0; i<sym.length; i++){
        console.log(sym[i]+"-"+N)
        N+=2;
    }
}

let N=30;
mapSymbols(N)