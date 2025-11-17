//*************************************************************//
//**              EJERCICIO 1 --- DESAFIO #3                 **//
//** CONVERTIR DECLARACION DE FUNCION A FUNCION DE EXPRESION **//
//*************************************************************//


/* ejemplo: función declarada */
function example(a, b, c) {
    return a + b + c
}



/* transforma: funcion de expresión */
let sumar = function (a,b,c){
    return a+b+c;
};

/* Llamar a la función expresada */
let sumandos = sumar(1,2,3); 