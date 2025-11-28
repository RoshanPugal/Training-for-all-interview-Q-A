let arr = [1,2,3,4,5,8,10]

console.log(Math.min(...arr));

console.log(Math.max(...arr));


console.log(arr.reduce((a,b)=>a+b));

console.log("=============================");


let text = "Hello World"
let vowels = ["a","e","i","o","u"]
let found = []

let foundvowels = text.toLowerCase()

for(let find of foundvowels){
    if(vowels.includes(find)){
        found.push(find)
    }
}

if(found.length>0){
    console.log("That strings have vowels :",found.join(","));
    
}else{
    console.log("That strings are not vowels");
    
}

let a = [1,5,7,10,12,13,15]
let b =[]
let c =[]
for(let i=0;i<a.length;i++){
    if(a[i]%2 ==1){
        b.push(a[i])
    }else{
        c.push(a[i])
    }
}
console.log(b,"is a Add Number")
console.log(c,"is a Even number")
