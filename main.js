function iniciar(){
    var j1=document.getElementById("u1").value 
    var j2=document.getElementById("u2").value 
    localStorage.setItem("u1", j1)
    localStorage.setItem("u2", j2)
    window.location="index2.html"
}