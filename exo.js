//exo1
/*
MaDiv = document.getElementById("button");

MaDiv.addEventListenner("click",CalculAire);

function CalculAire(evenement){
    var long = window.prompt("Saisir une longeur: ");
    var larg = window.prompt("Saisir une largeur ");
    var aire = long*larg;
    var perimetre =long*2 +larg*2;
    alert("aire : " +aire+ " perimetre : "+perimetre);
}
*/
//exo2
/*
MaDiv = document.getElementById("button");

MaDiv.addEventListenner("click",CalculAire);

function CalculAire(evenement){
    
    let rayon = prompt("Veuillez saisir la longueur du rayon du cercle : ");
    let perimetre = 2 * Math.PI * rayon;
    let aire = Math.PI * rayon ** 2;
    alert("Le périmètre du cercle est : " + perimetre+ "\nL'aire du cercle est : " + aire);
  }
*/
//exo3
/*
var a = 3;
var b = 2;

bouton = document.getElementById("button");
bouton.addEventListener("click", multiple);

function multiple(x = 8){
    return x * 3;
}
function affiche(){
    alert(multiple(a));
    alert(multiple(b));
    alert(multiple());
}
*/
//exo4
var tab = [-2,1,4];    
function additionne(x){
    x + 2;
}
function affiche(){
    
}


    
