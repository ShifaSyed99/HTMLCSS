let t1:[number, string, boolean] = [10, "Jane", true];
console.log(t1)

let add : [x: number, y : string] = [10, "Ajay"];
console.log(add)

let product :any = [101, "Speakers", 2000]
console.log("Product Id : "+product[0])

product.push(102, "Bags", 1400)
console.log(product)

product.push(100, "Shoes", 1000)
console.log(product)

console.log(product.pop())