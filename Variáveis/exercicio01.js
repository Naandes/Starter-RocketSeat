//Declare uma variável de nome weight.

let weight = 50

//Que tipo de dado é a variável weight?

console.log(typeof weight)

/*Declare uma variável e atribua valores para cada um dos dados:
name: String
age: Number (Integer)
stars: Number (float)
isSubscriber: Boolean 
*/

let name, age, stars, isSubscribed

name = "Cláudio"
age = 25
stars = 3,5
isSubscribed = true

/* A variável student abaixo é de que tipo de dados?

Atribua a ela as memas propriedades e valores do exercício 3

Mostre no console a seguinte mensagem:

<name> de idade <age> pesa <wight> kg.
*/

let student = {
name: "Cláudio",
age: 25,
stars: 3.5,
isSubscribed: true
};

console.log(`${student.name} de idade ${student.age} pesa ${weight}`)

//Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

//Retribua valor para a variável acima, colocando dentro dela o objeto studente da questão.

students = [
    student
]

console.log(students)

//Coloque no console acima o valor da posição zero do Array acima

console.log(students[0])

//Crie um novo student e coloque na posição 1 do Array students

let John = {
    name:"João",
    age: 31,
    stars: 5,
    isSubscribed: true

}

students[1] = John

//Sem rodar o código responda qual a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou
/* console.log(a)
    var a = 1

Resposta: A resposta será undefined, pois mesmo que o console.log esteja antes, pelo falto de "a" ser global, 
sofre hoisting e o programa sabe que existe uma variável declarada como "a".

*/

console.log(a)
var a = 1 