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

