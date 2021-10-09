//for loop- for(let initialization;condition check;increment/decrement)
//< asel tr i++         //> asel tr i--
// for(let i = 1;i<=10;i++)
// {
//     console.log(i)
// }

//let name = ['abhi','shweta','yash','ram','sham']

// for(let i = 0;i<3;i++)
// {console.log(i)
// console.log(name[i])}

// for(let i = 2;i<=name.length-1;i++)
// {console.log(i)
// console.log(name[i])}

// for(let i = 1;i<4;i++)
// {console.log(i)
// console.log(name[i])}

// for(let i = 0;i<=name.length-1;i++)
// {console.log(i)
// console.log(name[i])}

// for(let i = name.length-1;i>=0;i--)
// {console.log(i)
// console.log(name[i])}


//let wt = []
//let weight = [50,45,48,74,64,61]
// for(let i = 0;i<=weight.length-1;i++)
// {
//     let weights = 70-weight[i]
//     wt.push(weights)
// }
// console.log(wt)

// let above50 = []
// for(let i = 0;i<weight.length;i++)
// {
// if(weight[i]>=50)
//    {above50.push(weight[i])}
// }
// console.log(above50)

// let less40 = []
// for(let i = 0;i<weight.length;i++)
// {
//     if(weight[i]<40)
//     {less40.push(weight[i])}
// }
// console.log(less40)

// let less50 = []
// for(let i = 0;i<weight.length;i++)
// {
//     if(weight[i]<50)
//     {less50.push(weight[i])}
// }
// console.log(less50)

// let year = [2010,2024,2011,2017,2002,2005]
// let age = []

// for(let i = 0;i<year.length;i++)
// { 
//     let ages = 2021-year[i]
//     age.push(ages)
// }
// console.log(age)

// let above15 = []
// for(let i = 0;i<age.length;i++)
// {
//     if(age[i]>15)
//     {above15.push(age[i])}
// }
// console.log(above15)

// let area = [50,54,78,95,27,44]
// let sum = 0
// for(let i = 0;i<area.length;i++)
// {sum = sum + area[i]}
// console.log(sum)

//  let volume = [11,22,44,55,33]
//  let blank = 0
// for(let i = 0;i<volume.length;i++)
// {blank = blank + volume[i]}
// console.log(blank)

// function add(a, b, c, d, e) {
//     console.log(a + b + c + d + e)   
// }
// add(11, 22, 44, 55, 33)

let aaa = []
let rate = [50,25,88,55,65,77,90]

for(let i = 0;i<rate.length;i++){
    let aa = 100 - rate[i]
    aaa.push(aa)
}
console.log(aaa)

//map
let aa = rate.map(function (el,index,arr){
    return 100-el
})
console.log(aa)

console.log('----------')

let bbb = []
for(let i = 0;i<rate.length;i++){
    if (rate[i]>65 ){
        bbb.push(rate[i])     
    }
}
console.log(bbb)

//filter
let bb = rate.filter(function (el,index,arr){
    return el> 65   
})
console.log(bb)

console.log('----------')

let ccc = 0
for(let i = 0;i<rate.length;i++){
ccc = ccc + rate[i]
}
console.log(ccc)

//reduce
let cc = rate.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(cc)

console.log('----------')

//forEach
let friends = ['arav','shiv','ram','sham']
let dd = friends.forEach(function (el,index,arr) {
    console.log('welcome' +el)
})
console.log(dd)

//for loop to the array containing object
let student = [
    {
        name:"kiran",
        age:23
    },
    {
        name:"abhi",
        age:20
    },
    {
        name:"kush",
        age:30
    }
    ]
    //to retrive element in object of certain index value
    console.log(student[1].age)
    console.log(student[0].name)
    console.log(student[2]["name"])
    console.log(student[1]["age"])
    
    //to get all elements objects in sequence without curly bracket
    for(let i = 0;i<student.length;i++){
       // console.log(student[i]) -----------> this will give as it is object with curly bracket
        let obj = student[i]
        for(parameter in obj){
            console.log(parameter,obj[parameter]) //------------> this will give only property and value without bracket
        }
    }
    
    //find - to find object containing certain element
    let pp = student.find(function(el,index,arr){
        return el.name =="kiran"
    })
    console.log(pp)
    
    let qq = student.find(function(el,index,arr){
        return el.age == 30
    })
    console.log(qq)
    
    let rr = student.find(function(el,index,arr){
        return el.age == 23
    })
    console.log(rr)
    
    //findIndex
    
    let xx = student.findIndex(function(el,index,arr){
        return el.name == "kush"
    })
    console.log(xx)
    
    let yy = student.findIndex(function(el,index,arr){
        return el.age == 23
    })
    console.log(yy)