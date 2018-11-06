
 
var kali =(a, b) => {
    if(b ==0){
        return a;    
    }else{
        var sisa = a % b;
        return kali(b, sisa)
    }
}

var bagi = (a, b)=>{
    return (a *b) / kali(a,b)
}

let KB = (a,b)=>{
    console.log(`FPB ${a} & ${b} = ${kali(a,b)}`)
    console.log(`KPK ${a} & ${b} = ${bagi(a,b)}`)
}

console.log(KB(3,2))
