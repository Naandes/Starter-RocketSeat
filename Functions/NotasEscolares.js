//Criar um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C.
function GetScore(nota){
    if (nota>=90){
        console.log("A nota é tipo A")
    }
    else if (nota>=80 && nota<90){
        console.log("A nota é tipo B")
    }
    else if (nota>=70 && nota<80){
        console.log("A nota é tipo C")
    }
    else if (nota>=60 && nota<70){
        console.log("A nota é tipo D")
    }
    else if (nota<60){
        console.log("A nota é tipo F")
    }
}

GetScore(60)
