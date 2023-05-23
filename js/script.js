//Atrelando o evento click ao elemento h2
// const h2Element = document.getElementById("titulo");

// h2Element.addEventListener("click", ()=>{
//     //Math função matemática...
//     //Os metódos floor, round e ceil eles arredondam os números passados.
//     //O método randon retorna um número entre 0 e 1. Ex: 0.1233.
//     let r = "";
//     let g = "";
//     let b = "";

//     r =  Math.round(Math.random()*255);
//     g =  Math.round(Math.random()*255);
//     b =  Math.round(Math.random()*255);
    
   
//     // h2Element.setAttribute("style","color:rgb("+r+","+g+","+b+");");
//     h2Element.setAttribute("style",`color:rgb(${r},${g},${b});`);
//     h2Element.textContent = "NOVO TÍTULO";
// });

//CONST
//1ª REGRA - Na declaração você é obrigado a inicializar a constante. 
//2ª REGRA - É não se pode alterar o conteúdo de uma constante durante o fluxo do programa.
// const PI = 3.14;

//DIFERENÇA ENTRE VAR/LET
// var nome = "Mariana";

// if(nome != ""){
//     let nome = "Leonardo";
// }

// //QUAL NOME SERÁ IMPRESSO QUANDO NOME FOR ADICIONADO AO LOG?
// console.log(nome);

// let fruta = "melão";
// console.log(fruta);

// //ARRAY são Collections
// let frutas = ["uva","pêra","melância"];
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log("TAMANHO DO ARRAY : " + frutas.length);
// // let nome = "Leonardo";
// // console.log(nome[1]);

// //Adicionando um novo elemento no final do array
// //Utilizando o método push(item);
// frutas.push("banana");
// frutas.push("laranja");
// // console.log(frutas);
// console.table(frutas);

// //Removendo um item do final do array com o método pop();
// frutas.pop();
// console.table(frutas);

// //Removendo um item do início do array com o método shift();
// frutas.shift();
// console.table(frutas);

//Adicionando um novo elemento no início do array
// //Utilizando o método unshift(item);
// frutas.unshift("maracujá");
// frutas.unshift("kiwi");
// // console.log(frutas);
// console.table(frutas);


//Realizar uma busca de um item no array utiliza o método indexOf(nomeItem);
// let indice = frutas.indexOf("pêra");
// console.log(frutas[indice]);

//Removendo item através do indicie do array com método splice(indice, qtd)
// let indice = frutas.indexOf("pêra");
// frutas.splice(indice,1);
// console.table(frutas);

//Iterando arrays
// let frutas = ["uva","laranja","banana","maçã","kiwi","abacate"];
// console.log("MINHAS FRUTAS : " + frutas);


// frutas.forEach( (fruta)=>{
//     console.log(fruta);
// } );

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];

// //Ao invés de concatenar os arrays vamos utilizar o operador SPREAD( ... ) para melhorar a inserç~Qao dos dados no novo array.
// //CONCATENAÇÃO DE ARRAYS:
// // let nr3 = [nr1,nr2];
// let nr3 = [...nr1,...nr2];

// //Imprimindo o novo array concatenado.
// console.log("NOVO ARRAY : " + nr3);
// //Aplicando o forEach no novo array
// nr3.forEach((nr)=>{
//     console.log("ITENS DO NOVO ARRAY : " + nr);
// });

//Converter HTMLElements em Array
// const aElements = document.getElementsByTagName("a");
// console.log(aElements);
// const aElementsArray = [...aElements];
// console.log(aElementsArray);

// //Imprimindo atributos dos elementos recuperados...
// aElementsArray.forEach((a)=>{
//     console.log(a.href);
// });

//CONVERTER EM ARRAY
// const imgElements = [...document.querySelectorAll(".conteudo img")];
// imgElements.forEach( (img)=>{
//     img.setAttribute("style","width:30%;")
// });
 
// const inputUser = document.querySelector("input[type='email']");

// inputUser.addEventListener("focus", ()=>{
//     inputUser.setAttribute("style","outline-color:#ff0000;");
// });

// inputUser.addEventListener("keyup", ()=>{
//     const lblUser = document.querySelector("label[for='idEmail']");
//     if(inputUser.value.length < 5){
//         lblUser.innerHTML = "<span style='color:#ff0000;'>Email(Mínimo de 5 caractéres)</span>"
//         inputUser.setAttribute("style","outline-color:#ff0000;");
//     }else{
//         lblUser.innerHTML = "<span style='color:#00ff00;'>Email</span>"
//         inputUser.setAttribute("style","outline-color:#00ff00;");
//     }
// });

// //MOSTRAR A SENHA
// const eyePass = document.querySelector(".fa-eye");

// eyePass.addEventListener("click",()=>{
//     const inputPass = document.querySelector("#idPass");

//     //Alterar o type
//     if(inputPass.getAttribute("type") == "password"){
//         inputPass.setAttribute("type","text");
//     }else{
//         inputPass.setAttribute("type","password");
//     }
// });
if(localStorage.getItem("user-token")){
    const divWelcome = document.querySelector("#welcome");
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));
    divWelcome.innerHTML = usuarioValidado.nomeCompleto;

    const imgAvatar = document.querySelector("#avatar");
    imgAvatar.src = usuarioValidado.avatar;

    const botaoSair = document.querySelector("#btnSair");
    botaoSair.addEventListener("click",()=>{
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-validado");
        window.location.href = "../pages/login.html";    
    });

}else{
    window.location.href = "../pages/login.html";
}

    

