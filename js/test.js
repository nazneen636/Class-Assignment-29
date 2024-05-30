let arr= ['Akhi', 'Nipa', 'Dipa', 'Ripa']
console.log(arr)
arr.push('Nila')
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift('Lima')
console.log(arr)

let obj= {
    name: 'Nazneen',
    age: 30,
    marks: function(a,b){
        console.log(a+b)
    }
}
console.log(obj.name)
console.log(obj.age)
obj.marks(60,20)

function agechecker(name, age){
    if(age<18){
        console.log('You are immature')
    }else if(age>=18){
        console.log('You are adult')
    }
}
agechecker('Mr. Nazmul', 25)
agechecker('H.M. Tanvir', 17)