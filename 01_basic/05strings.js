const name ="ROhit "

const repocount = 50

// console.log (name + repocount + value) old school

console.log(` hello my name is ${ name } and repocount is ${repocount}`)


const gameName = new String('Rohit')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(2))
console.log(gameName.indexOf(`t`))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString =gameName.slice(-4 , 3)
console.log(anotherString)

const newStringOne = "    Rohit   "
console.log(newStringOne) // whit space , print all charecter 
console.log(newStringOne.trim()) // trim and print main value

 const url ="https://rohit.com/rohit%8jha"

 console.log(url.replace('%8' ,'-'))

 console.log(gameName.splict('-'))