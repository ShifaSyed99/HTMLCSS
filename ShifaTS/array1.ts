export{}
let name : [String] = ["sakshi"];
console.log(name);

let c : String[] = ["mango", "apple", "orange"];
console.log(c.lastIndexOf('apple'));
console.log(c.lastIndexOf('orange'));

console.log(c[0])

console.log(name.concat(c))

name.push('shifa')

console.log(name)

c.pop()

console.log(c)

console.log(name.reverse())

c.unshift("banana")
console.log(c)

console.log(c.toString())

for(let i = 0; i<c.length; i++){
    console.log(c[i])
}

let emp : string[] = new Array("jane", "25","Java Developer")
console.log(emp)
for(let i1 = 0; i1<c.length; i1++){
    console.log(emp[i1])
}