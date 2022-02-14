
function cambiarEstado()
{
	let lista_parrafos=document.getElementsByTagName('p');
	let lista_divs=document.getElementsByTagName('div');
	for (i=0;i<lista_parrafos.length;i++){
		document.getElementsByTagName("p")[i].style.color="red";
		document.getElementsByTagName("p")[i].innerHTML="ROJO";
	}
	for (i=0;i<lista_divs.length;i++){
		document.getElementsByTagName("div")[i].style.color="green";
		document.getElementsByTagName("div")[i].innerHTML="VERDE";
	}

}