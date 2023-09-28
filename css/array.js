//arreglos o arrays

let numeros =[20,50,30,45,75];


let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
// console.table(meses);

// let arreglo =["Hola", 20,false, "mundo",null, 45,true,{nombre: "Alejandra", desempeño: estudiante"},[1,2,3]]
// console.log(arrglo);

//Acceder a los valores del arreglo por posicion
// console.table(numeros[0]);
// console.table (numeros[2]);
// console.table(numeros[5]);

//conocer la extension de un arreglo 
nuevo_meses = [...meses, 'junio']; //Agregar un dato al arreglo 
meses.pop(); //Elimina el ultimo elemento de un arreglo
meses.shift();//Elimina primer elemento de un arreglo 

numeros.push(27,36,69,24);//Agregar, elementos al final del arreglo
numeros.unshift(1,2,3,4)//Agregar, elementos al principio del arreglo

meses.splice(1,2); //Elimina segun la posicion y los elementos que quiera 
//console.table(numeros);
console.table(meses);
