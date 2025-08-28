let destructuring = [["Uva","Pera", "Maçã"], [12,14]];

let [[fruta1,fruta2,fruta3,fruta4 = "Melão"],[,num1]] = destructuring;

console.log(num1);