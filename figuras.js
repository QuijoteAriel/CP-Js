// CUADRADO

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
}

function calculaPerimetro() 
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El Perimetro de tu Cuadrado es: "+ perimetro + "cm.");
} 

function calculoArea()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area de tu  Cuadrado " + area + "cm²." );
}

// TRIANGULO
function calculoPerimetroTriangulo()
{
    const input1= document.getElementById("inptutLado1");
    const value1=  parseInt(input1.value);

    const input2= document.getElementById("inptutLado2");
    const value2= parseInt(input2.value);

    const inputbase= document.getElementById("inptutBase");
    const valueBase= parseInt(inputbase.value);

    const perimetroT = perimetroTriangulo(value1,value2,valueBase);
    alert ("El Perimetro de tu Triangulo es: " + perimetroT + "cm." );
}
function perimetroTriangulo(lado1,lado2, base)
{
    return (lado1 + lado2 + base);
}

function areaTriangulo(altura, base)
{
    return (base * altura) / 2;
}
function calculaAreaTriangulo()
{
    const inputAltura= document.getElementById("inptutAltura");
    const value1 = parseInt(inputAltura.value);
    
    const inputBase= document.getElementById("inptutBase");
    const value2 = parseInt(inputBase.value);
    const areaT =areaTriangulo (value1, value2)
    alert ("El Area de tu Triangulo es: " + areaT+ "cm²." );
}
// TRIANGULO ISOSELES

function trianguloIsoseles()
{
    const input1= document.getElementById("inptutLado1");
    const value1=  parseInt(input1.value);

    const input2= document.getElementById("inptutLado2");
    const value2= parseInt(input2.value);

    const inputBase= document.getElementById("inptutBase");
    const valueBase= parseInt(inputBase.value);
    const altura = Math.sqrt(value1**2 - valueBase**2/ 4)
    
    if(value1 == value2  && value2 == valueBase)
    {
        
        return  alert("Es un Triangulo Equilatero  ");
    }
        else if( value1 == value2 || value2 == valueBase || valueBase == value1)
    {
        return alert ("Es un Triangulo Isoseles y su altura es "+ altura );
    }

    else 
    {
        return alert("es un trianguli escaleno");
    }
    
}
    
// CIRCULO
function diametroCirculo(radio)
{
return radio * 2;
}

function areaCirculo (radio)
{
return (radio * radio )* Math.PI ;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
const PI = Math.PI;

function calculoDiametrCirculo()
{
    const inputRadio = document.getElementById("radioCirculo");
    const valueRadio = parseInt(inputRadio.value);
    const diametro = diametroCirculo(valueRadio);
    alert ("El Diametro del Circulo es: " + diametro + "cm.");
}

function calculoAreaCirculo()
{
    const inputArea = document.getElementById("radioCirculo");
    const valuearea = parseFloat(inputArea.value);
    const area = areaCirculo (valuearea);
    alert("El Area del Circulo es: " + area + "cm²");
}
