
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let output = document.querySelector(".ouput");
let outputElements = document.querySelector(".output-elements");
let btnCopíar = document.querySelector(".btn-copiar");
let ouputSection = document.querySelector(".ouput-section");
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopíar.addEventListener("click", copiar);
function encriptar() {
    let palabra = document.querySelector(".txt-input").value;
    if(palabra != ""){
            let resultado = Array.from(palabra);
        for(let i=0; i<palabra.length; i++){
            if(palabra[i]=="a"){
                resultado[i] = "ai";
            }
            if(palabra[i]=="e"){
                resultado[i] = "enter";
            }
            if(palabra[i]=="i"){
                resultado[i] = "imes";
            }
            if(palabra[i]=="o"){
                resultado[i] = "ober";
            }
            if(palabra[i]=="u"){
                resultado[i] = "ufat";
            }
        }
        resultado = UnirPalabras(resultado);
        mostrarSalida(resultado);
        limpiarElementoDeSalida()
    }else{
        alert("INGRESA UN TEXTO PARA PODER SER ENCRIPTADO");
    }
    
  }
function desencriptar(){
    let palabra = document.querySelector(".txt-input").value;
    if(palabra != ""){
        palabra = palabra.replaceAll("ai","a")
        palabra = palabra.replaceAll("enter","e")
        palabra = palabra.replaceAll("imes","i")
        palabra = palabra.replaceAll("ober","o")
        palabra = palabra.replaceAll("ufat","u")
        mostrarSalida(palabra);
        limpiarElementoDeSalida()
    }else{
        alert("INGRESA UN TEXTO PARA PODER SER DESENCRIPTADO");
    }
    console.log(palabra);
  }
function UnirPalabras(Array){
    let salida="";
    for(let i=0; i<Array.length; i++){
        salida += Array[i]
    }
    return salida
}
function mostrarSalida(resultado){
    output.innerHTML = `<textarea class="resultado" name="input" id="" cols="30" rows="15">${resultado}</textarea>`;
}
function limpiarElementoDeSalida(){
    outputElements.style.cssText = 'display: none';
    btnCopíar.style.cssText = 'display: inline-block';
    ouputSection.style.cssText = 'justify-content: space-between';
}
function copiar(){
    let palabra = document.querySelector(".resultado");
    document.querySelector(".txt-input").value = palabra.innerHTML
}