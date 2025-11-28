let arr=["apple","straberry","blueberry","grapes","apple"]

arr.sort()
console.log("1",arr);

let uni=[...new Set(arr)]
console.log(uni);



let arr1=[10,10,20,30,40,50,10,20,50,60]

arr1.sort()
console.log("2",arr1);

let unique=[...new Set(arr1)]
console.log(unique);


let fruit = ["apple","straberry","blueberry","grapes","apple"]
let count = {}


for(let i=0;i<fruit.length;i++){
    let fruits = fruit[i]
    if(count[fruits]){
        count[fruits]++
    }else{
        count[fruits]=1
    }
}console.log(count)


