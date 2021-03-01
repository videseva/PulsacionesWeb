function prueba(){
	var sexo = document.getElementById("sexo").value;
	console.log(sexo);
}
//REGISTRAR PULSACION
function registrarPulsacion(){

	var identificacion = document.getElementById("identificacion").value;
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var sexo = document.getElementById("sexo").value;
	var pulsacion_calculo = 0;

	if(identificacion && nombre && edad && sexo){
		if(sexo=='F'){
			pulsacion_calculo =(220 - edad) /10;
		}else{
			pulsacion_calculo =(210 - edad) /10;
		};

		//creo mi objeto
		var pulsacion = {
			identificacion: identificacion,
			nombre : nombre,
			edad : edad,
			sexo : sexo,
			pulsacion : pulsacion_calculo
		};

		var pulsaciones = localStorage.getItem('pulsaciones');
		if(pulsaciones){
			pulsaciones = JSON.parse(pulsaciones);
		}else{
			pulsaciones = [];
		}
		pulsaciones.push(pulsacion);

		console.log(pulsacion);
		//AGREGAR AL ARRAY
		console.log(pulsaciones);
		localStorage.setItem('pulsaciones', JSON.stringify(pulsaciones));
		limpiarCampos();
		alert("Se registro su pulsacion de forma exitosa. ");
		document.getElementById('resultado').innerHTML ="Su pulsacion es :"+pulsacion_calculo;
	}else{
		alert("Debe completar los campos requerios.");
	}
}

consultarPulsaciones();

function consultarPulsaciones(){
	var pulsaciones = localStorage.getItem('pulsaciones');
	if(pulsaciones){
		pulsaciones = JSON.parse(pulsaciones);
	}else{
		pulsaciones = [];
	}
	var item = '';
	for (var i = 0; i < pulsaciones.length; i++) {
		var p = pulsaciones[i];
		item += '<tr>';
		item += '<td>'+ p.identificacion +'</td>';
		item += '<td>'+ p.nombre +'</td>';
		item += '<td>'+ p.edad +'</td>';
		item += '<td>'+ p.sexo +'</td>';
		item += '<td>'+ p.pulsacion +'</td>';
		item += '<td>';
		item += '<button  type="button" class="btn-eliminar">Eliminar</button>';
		item += '</td>';
		item += '</tr>';
	}
	var elemtoListadoPulsaciones = document.getElementById('listadoPulsaciones');
	//VALIDAR QUE EXISTA EL ELEMENTO
	if(elemtoListadoPulsaciones){
		elemtoListadoPulsaciones.innerHTML = item;
	}
	console.log(pulsaciones);
}

 function limpiarCampos(){
  	document.getElementById("identificacion").value='';
	document.getElementById("nombre").value='';
	document.getElementById("edad").value='';
	document.getElementById("sexo").value='';
 }