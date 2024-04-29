//Almacenar el texto del Usuario
[]
const textArea = document.querySelector ('.cajaIngreso');
const mensaje = document.querySelector ('.cajaResultado');
const copiar = document.querySelector ('.copiar');

copiar.style.display = "none";


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar (textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.style.placeholder = "none";
    copiar.style.display = 'inline-block';
}


function encriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   //Convertir textos a miniscula
    stringEncriptado = stringEncriptado.toLowerCase(/[^a-z\s]/g, '');
   //Inicia en cero, debe ser menor que nuestra matriz codigo e ingrementar para que recorra la matriz
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            //Sustitucion de las letras, 
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}


//Descrpitar textos

function btnDesencriptar(){
    const textoDesencriptado = desencriptar (textArea.value);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.style.placeholder = "none";
    copiar.style.display = 'inline-block';
}


function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   //Convertir textos a miniscula
    stringDesencriptado = stringDesencriptado.toLowerCase(/[^a-z\s]/g, '');
   //Inicia en cero, debe ser menor que nuestra matriz codigo e ingrementar para que recorra la matriz
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            //Sustitucion de las letras, 
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}


//Copiar

  function btnCopiar() {
    // Seleccionar el elemento .cajaResultado para copiar su contenido
    const copyText = document.querySelector('.cajaResultado');

    // Seleccionar y copiar el contenido del elemento
    copyText.select();
    document.execCommand('copy');

    // No necesitas la alerta si el copiado fue exitoso, puedes simplemente indicarlo en la interfaz
    alert("Texto copiado: " + copyText.value);
}

// Asignar el evento click a tu botón de copiar
document.querySelector('.copiar').addEventListener('click', btnCopiar);
