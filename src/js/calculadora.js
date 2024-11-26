function resultado(){
    let metro=document.getElementById('metros').value;
    let kilogramo=document.getElementById('kilogramos').value;
    let operacion= kilogramo / (metro/100)**2
    let resultado=document.getElementById('resultado');
    resultado.value=Math.round (operacion);
    if (operacion<18){
        let categoria=document.getElementById('categoria');
        categoria.value="Bajo peso"
        let mensaje=document.getElementById('mensaje');
        mensaje.value="Te recomendamos con nuestra nutriologa especializada natalia"
    }
    if(operacion>19 && operacion <25){
        categoria.value='Peso normal'
        let mensaje=document.getElementById('mensaje');
        mensaje.value="Te recomendamos que visites nuestro gimnsacio, matengamos en forma y seamos mas fuertes"
    }
    if(operacion>=25 && operacion <30){
        categoria.value='Sobre peso'
        let mensaje=document.getElementById('mensaje');
        
    }
    if(operacion>=30 && operacion <35){
        categoria.value='Obesidad 1'
        let mensaje=document.getElementById('mensaje');
        mensaje.value="Te recomendamos con nuestra nutriologa especializada natalia"
    }
    if(operacion>=35 && operacion <40){
        categoria.value='Obesidad 2'
        let mensaje=document.getElementById('mensaje');
        mensaje.value="Te recomendamos con nuestra nutriologa especializada natalia"
    }
    if(operacion>=40){
        categoria.value='Obesidad 3'
        let mensaje=document.getElementById('mensaje');
        mensaje.value="Te recomendamos con nuestra nutriologa especializada natalia"
    }


}