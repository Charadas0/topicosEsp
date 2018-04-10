function aumenta(obj){
    (".loginlinks img").css("width", "60px" );
    (".loginlinks img").css("height", "60px" );
}
 
function diminui(obj){
	(".loginlinks img").css("width", "40px" );
	(".loginlinks img").css("height", "40px" );
	
}

function trocaCor(){
   var cor = document.getElementById("corum").value;
   document.getElementById("container").style.backgroundColor = cor;
}