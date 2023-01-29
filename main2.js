var j1=localStorage.getItem("u1")
var j2=localStorage.getItem("u2")
var puntosj1=0
var puntosj2=0
document.getElementById("juno").innerHTML=j1
document.getElementById("jdos").innerHTML=j2
document.getElementById("p1").innerHTML=puntosj1
document.getElementById("p2").innerHTML=puntosj2
document.getElementById("tdp").innerHTML=j1
document.getElementById("tdr").innerHTML=j2
var turnop="j1"
var turnor="j2"
function enviar(){
     escribir=document.getElementById("palabra").value 
     minuscula=escribir.toLowerCase()
var letrauno=minuscula.charAt(1)
var calculo=Math.floor(minuscula.length/2)
var letra2 =minuscula.charAt(calculo)
var calculo2=minuscula.length-1
var letra3=minuscula.charAt(calculo2)
var p1=minuscula.replace(letrauno, " _ ")
var p2=p1.replace(letra2, " _ ")
var p3=p2.replace(letra3, " _ ")
var palabra="<h4 id='idp'> palabra= "+p3+"</h4>"
var respuesta="<input id='rinput' type='text'>"
var boton="<button id='b' onclick='comprobar()' >comprobar </button>"
var turno=palabra+"<br>"+respuesta+"<br>"+boton
document.getElementById("div1").innerHTML=turno
document.getElementById("palabra").value=""
}
function comprobar(){
     leer=document.getElementById("rinput").value
     min2=leer.toLowerCase()
    if(min2==minuscula){
        if(turnor=="j1"){
            puntosj1=puntosj1+1
            document.getElementById("p1").innerHTML=puntosj1
        }
        else{
            puntosj2=puntosj2+1
            document.getElementById("p2").innerHTML=puntosj2  
        }
    }
    if(turnop=="j1"){
        turnop="j2"
        document.getElementById("tdp").innerHTML=j2

    }
    else{
        turnop="j1"
        document.getElementById("tdp").innerHTML=j1
    }
    if(turnor=="j1"){
        turnor="j2"
        document.getElementById("tdr").innerHTML=j2

    }
    else{
        turnor="j1"
        document.getElementById("tdr").innerHTML=j1
    }
    document.getElementById("div1").innerHTML=""
}
