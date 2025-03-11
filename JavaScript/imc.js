var nome = "Eliseu";

var alturacm = "171";
    alturacm = parseFloat(alturacm);

var peso = "58";
    peso = parseInt(peso);

var alturam = alturacm/100;

var imc = peso/(alturam^2);
    imc = imc.toFixed(2)

var clas = "";

console.log(imc);

if (imc<16){
    clas = "Baixo peso muito grave";
}else if(imc>=16 && imc<17){
    clas = "Baixo peso grave";
}else if(imc>=17 && imc<18.5){
    clas = "Baixo peso";
}else if(imc>=18.5 && imc<25){
    clas = "Peso normal";
}

console.log(clas);

if (imc<16){
    console.log(`${nome} possui o imc de ${imc}, sendo classificado como ${clas}`)
}else if(imc>=16 && imc<17){
    console.log(`${nome} possui o imc de ${imc}, sendo classificado como ${clas}`)
}else if((imc>=17 && imc<18.5)){
    console.log(`${nome} possui o imc de ${imc}, sendo classificado como ${clas}`)
}else if(imc>=18.5 && imc<25){
    console.log(`${nome} possui o imc de ${imc}, sendo classificado como ${clas}`)
}

