 // array 

 const myArr =[1 ,2, 3 , 4, 5, 6]

 const myHEURO = ["saktiman" , "gangadhdhr" ]

 const myarr = new Array(1, 2, 3, 4, )
//  console.log(myArr[1])


 // array mehodth

myArr.push(7) // 7 add
myArr.pop()// last value of array is delete

myArr.unshift(9) // 9 inset in 1st place

myArr.shift()// 1st value remove

// slice and splice 

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log("B" , myArr)
console.log(myn1)


const myn2 = myArr.splice(1, 3)
console.log("c" ,myArr)
console.log(myn2)
