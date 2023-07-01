t = [1, -1 , 3]
t.push(5)

console.log(t.length)
console.log()
console.log(t[1])

console.log()

t.forEach(element => {
    console.log(element)
});

const t2 = t.concat(7)
console.log()
t2.forEach(element => {
    console.log(element)
});
console.log()

const m = t.map(value => value*3)
console.log(m)
console.log()

const m2 = t.map(value => '<li>' + value + '<li/>')
console.log(m2)
console.log()


const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)
console.log()

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
const object2 = {
name: 'Full Stack web application development',
level: 'intermediate studies',
size: 5,
}

const object3 = {
name: {
    first: 'Dan',
    last: 'Abramov',
},
grades: [2, 3, 5, 3],
department: 'Stanford University',
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])
console.log()

object1.address = 'Helsinki'
object1['secret number'] = 12341

const sum = (n1, n2) => {
    console.log(n1)
    console.log(n2)
    return n1 + n2
}

const res = sum(2, 71)
console.log(res)
console.log()

const square = (n) => {
    console.log(n)
    return n * n
}

const squared_res = square(10)
console.log(squared_res)
console.log()

const square2 = n => n * n

const tSquared = t.map(value => square2(value))
console.log(tSquared)
console.log()

function product(n1, n2) {
    return n1 * n2
}

const res2 = product(5, 25)
console.log(res2)
console.log()

const avg = function(n1, n2) {
    return (n1 + n2) / 2
}

const resAvg = avg(10, 100)
console.log(resAvg)
console.log()