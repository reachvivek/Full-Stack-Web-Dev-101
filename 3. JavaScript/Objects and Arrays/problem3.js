function mapCharAndSum(N,K,str) {
    // Write code here
    let sum=0,s=97,e=123;
    let ob={};
    for(s; s!=e; s++){
        ob[String.fromCharCode(s)]=N
        N++;
    }
    for(let i=0; i<str.length; i++){
        sum+=ob[str[i]]
    }
    console.log(sum)
}

let N=30, K=3, str="abc"
mapCharAndSum(N,K,str)