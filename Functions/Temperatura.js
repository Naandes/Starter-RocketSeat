/* Celsius em Fahreheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transforamção de uma unidade para outra.

*/

function CtoF(temperatura){
    temperaturanova = (Number(temperatura)-32)*5/9
    console.log(temperaturanova)

}
function FtoC(temperatura){
    temperaturanova = (Number(temperatura)*9/5)+32
    console.log(temperaturanova)
}

CtoF(50)