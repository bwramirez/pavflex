$(document).ready(function () {
	
});

function imprimir1() {

	var printme = document.getElementById("Reporte_variables_resultados");
	var printme0 = document.getElementById("ReporteResultados");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre').innerHTML = "<strong>" + "Nombre del proyecto:  " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion').innerHTML = "<strong>" + "Ubicación del proyecto:  " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta').innerHTML = "<strong>" + "Ruta:  " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo').innerHTML = "<strong>" + "Tramo:  " + "</strong>" + recibetramo;


	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador').innerHTML = "<strong>" + "Diseñador:  " + "</strong>" + recibeDiseñador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDiseñador === "")){
		$(".datosProyecto").hide();
	} else {
		$(".datosProyecto").show();
	}
	//FINNNN
	//Parámetros de diseño
	var recibepi = document.getElementById('pi').value;
	document.getElementById('txt_pi').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pf').value;
	document.getElementById('txt_pf').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('psi').value;
	document.getElementById('txt_psi').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = document.getElementById('valorConfiabilidad').value;
	document.getElementById('txtConfi').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('tipoConfiabilidad').value;
	document.getElementById('txtZr').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('So_Flexible').value;
	document.getElementById('txtSo').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('traficoTMDAflexible').value;
	document.getElementById('txtTMDA').innerHTML = "<strong>" + "Tráfico medio diario anual (TMDA): " + "</strong>" + recibeTMDA;
	var reciber = document.getElementById('traficoTasa_CreFlexible').value;
	document.getElementById('txt_r').innerHTML = "<strong>" + "Tasa de crecimiento vehicular (r): " + "</strong>" + reciber;
	var recibePD = document.getElementById('traficoPeriodo_diseñoFlexible').value;
	document.getElementById('txtPD').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD;
	var recibeD = document.getElementById('traficoDireccionalidadFlexible').value;
	document.getElementById('txtD').innerHTML = "<strong>" + "Direccionalidad (D): " + "</strong>" + recibeD;
	var recibeptt = document.getElementById('trafico_ptFlexible').value;
	document.getElementById('txt_ptt').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeSN = document.getElementById('traficoSN_Flexible').value;
	document.getElementById('txtSNtanteo').innerHTML = "<strong>" + "Número estructural (SN): " + "</strong>" + recibeSN;
	var recibeESALS = document.getElementById('Esals_Flexible').value;
	document.getElementById('txtESALS').innerHTML = "<strong>" + "Número de ejes equivalentes (ESAL´S): " + "</strong>" + recibeESALS + " vehiculos";
	
	//FIN

	//Parámetros de base

	var recibepropbase = $("#base_caracteristicas_td").text();
	if (recibepropbase == "CBR") {
		var unidadbase = "%";
	} else {
		var unidadbase = "";
	}

	var recibepropvbase = document.getElementById('base_caracteristicas').value;
	document.getElementById('txt_propiedad_base').innerHTML = "<strong>" + recibepropbase + ": " + "</strong>" + recibepropvbase + unidadbase;
	var recibea2 = document.getElementById('a2').value;
	document.getElementById('txt_a2').innerHTML = "<strong>" + "Coeficiente estructural (a2): " + "</strong>" + recibea2;
	var recibeMb = document.getElementById('Mb').value;
	document.getElementById('txtMb').innerHTML = "<strong>" + "Módulo resiliente (Mb): " + "</strong>" + recibeMb + " psi";

	var recibecd = document.getElementById('select_drenaje_base').value;
	document.getElementById('txt_cd_base').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecd;
	var recibeps = document.getElementById('porcentaje_humedad_m2').value;
	document.getElementById('txt_porcentajeHumedad_base').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibeps;
	var recibem2 = document.getElementById('m2').value;
	document.getElementById('txt_m2').innerHTML = "<strong>" + "Coeficiente de drenaje de base (m2): " + "</strong>" + recibem2;

	//FIN

	//Parámetros de subbase

	var recibepropsbase = $("#subbase_caracteristicas_td").text();
	if (recibepropsbase == "CBR") {
		var unidadsbase = "%";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase_caracteristicas').value;
	document.getElementById('txt_propiedad_subbase').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('a3').value;
	document.getElementById('txt_a3').innerHTML = "<strong>" + "Coeficiente estructural (a3): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('Msb').value;
	document.getElementById('txtMsb').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";

	var recibecds = document.getElementById('select_drenaje_subbase').value;
	document.getElementById('txt_cd_subbase').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('porcentaje_humedad_m3').value;
	document.getElementById('txt_porcentajeHumedad_subbase').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss;
	var recibem3 = document.getElementById('m3').value;
	document.getElementById('txt_m3').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m3): " + "</strong>" + recibem3;
	
	//FIN

	//Parámetros de subrasante
	var recibeCBR = document.getElementById('subrasante_caracteristicas_flexible').value;
	document.getElementById('txt_CBR_subrasante').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeMr = document.getElementById('Mr').value;
	document.getElementById('txtMr').innerHTML = "<strong>" + "Módulo resiliente (Mr): " + "</strong>" + recibeMr + " psi";
	//FIN

	//Parámetros de asfalto
	var recibeMe = document.getElementById('modulo_elastico_asfalto').value;
	document.getElementById('txt_Me').innerHTML = "<strong>" + "Módulo elástico: " + "</strong>" + recibeMe + " psi";
	var recibea1 = document.getElementById('a1').value;
	document.getElementById('txt_a1').innerHTML = "<strong>" + "Coeficiente estructural (a1): " + "</strong>" + recibea1;
	//FIN

	//Resultados
	var recibeSN3 = document.getElementById('sn3').value;
	document.getElementById('txtSN3').innerHTML = "<strong>" + "Número estructural total requerido (SN3): " + "</strong>" + recibeSN3;
	var recibeSN2 = document.getElementById('sn2').value;
	document.getElementById('txtSN2').innerHTML = "<strong>" + "Número estructural base y carpeta asfáltica (SN2): " + "</strong>" + recibeSN2;
	var recibeSN1 = document.getElementById('sn1').value;
	document.getElementById('txtSN1').innerHTML = "<strong>" + "Número estructural carpeta asfáltica (SN1): " + "</strong>" + recibeSN1;

	var recibeeA = document.getElementById('espesor_asfalto_clc').value;
	document.getElementById('txt_espesor_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeeA + " plg";
	var recibeeB = document.getElementById('espesor_base_clc').value;
	document.getElementById('txt_espesor_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeeB + " plg";
	var recibeeSB = document.getElementById('espesor_subbase_clc').value;
	document.getElementById('txt_espesor_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeeSB + " plg";

	var recibeecA = document.getElementById('espesor_asfalto_recomendado').value;
	document.getElementById('txt_espesor_recomendado_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeecA + " plg";
	var recibeecB = document.getElementById('espesor_base_recomendado').value;
	document.getElementById('txt_espesor_recomendado_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeecB + " plg";
	var recibeecSB = document.getElementById('espesor_subbase_recomendado').value;
	document.getElementById('txt_espesor_recomendado_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeecSB + " plg";
	//FIN



	var caratula = document.getElementById("ReporteCaratula");
	var declaracion = document.getElementById("ReporteDeclaracion");

	var wme = window.open('', 'Print-Window');
	wme.document.open();

	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   }</style></head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '</body></html>');
	wme.document.close();
	document.write

	setTimeout(function () {
		wme.close();
	}, 10);

}

function imprimir() {

	var printme = document.getElementById("Reporte_variables_resultados");
	var printme0 = document.getElementById("ReporteResultados");
	//DATOS DEL PROYECTO
	var recibenombre = document.getElementById('datoNombre').value;
	document.getElementById('txtNombre').innerHTML = "<strong>" + "Nombre del proyecto: " + "</strong>" + recibenombre;

	var recibeubicacion = document.getElementById('datoUbicacion').value;
	document.getElementById('txtUbicacion').innerHTML = "<strong>" + "Ubicación del proyecto: " + "</strong>" + recibeubicacion;

	var reciberuta = document.getElementById('datoRuta').value;
	document.getElementById('txtRuta').innerHTML = "<strong>" + "Ruta: " + "</strong>" + reciberuta;

	var recibetramo = document.getElementById('datoTramo').value;
	document.getElementById('txtTramo').innerHTML = "<strong>" + "Tramo: " + "</strong>" + recibetramo;


	var recibeDiseñador = document.getElementById('datoDiseñador').value;
	document.getElementById('txtDiseñador').innerHTML = "<strong>" + "Diseñador: " + "</strong>" + recibeDiseñador;

	if((recibenombre === "")&&(recibeubicacion === "")&&(reciberuta === "")&&(recibetramo === "")&&(recibeDiseñador === "")){
		$(".datosProyecto").hide();
	} else {
		$(".datosProyecto").show();
	}
	//FINNNN
	//Parámetros de diseño
	var recibepi = document.getElementById('pi').value;
	document.getElementById('txt_pi').innerHTML = "<strong>" + "Serviciabilidad inicial (pi): " + "</strong>" + recibepi;
	var recibepf = document.getElementById('pf').value;
	document.getElementById('txt_pf').innerHTML = "<strong>" + "Serviciabilidad final (pf): " + "</strong>" + recibepf;
	var recibepsi = document.getElementById('psi').value;
	document.getElementById('txt_psi').innerHTML = "<strong>" + "Índice de serviciabilidad (Δpsi): " + "</strong>" + recibepsi;
	var recibeconfi = document.getElementById('valorConfiabilidad').value;
	document.getElementById('txtConfi').innerHTML = "<strong>" + "Factor de confiabilidad: " + "</strong>" + recibeconfi;
	var recibeZr = document.getElementById('tipoConfiabilidad').value;
	document.getElementById('txtZr').innerHTML = "<strong>" + "Desviación normal estándar (Zr): " + "</strong>" + recibeZr;
	var recibeSo = document.getElementById('So_Flexible').value;
	document.getElementById('txtSo').innerHTML = "<strong>" + "Desviación estándar (So): " + "</strong>" + recibeSo;
	//FIN

	//Parametros de tráfico
	var recibeTMDA = document.getElementById('traficoTMDAflexible').value;
	document.getElementById('txtTMDA').innerHTML = "<strong>" + "Tráfico medio diario anual (TMDA): " + "</strong>" + recibeTMDA;
	var reciber = document.getElementById('traficoTasa_CreFlexible').value;
	document.getElementById('txt_r').innerHTML = "<strong>" + "Tasa de crecimiento vehicular (r): " + "</strong>" + reciber;
	var recibePD = document.getElementById('traficoPeriodo_diseñoFlexible').value;
	document.getElementById('txtPD').innerHTML = "<strong>" + "Periodo de diseño: " + "</strong>" + recibePD;
	var recibeD = document.getElementById('traficoDireccionalidadFlexible').value;
	document.getElementById('txtD').innerHTML = "<strong>" + "Direccionalidad (D): " + "</strong>" + recibeD;
	var recibeptt = document.getElementById('trafico_ptFlexible').value;
	document.getElementById('txt_ptt').innerHTML = "<strong>" + "Serviciabilidad final (Pt): " + "</strong>" + recibeptt;
	var recibeSN = document.getElementById('traficoSN_Flexible').value;
	document.getElementById('txtSNtanteo').innerHTML = "<strong>" + "Número estructural (SN): " + "</strong>" + recibeSN;
	var recibeESALS = document.getElementById('Esals_Flexible').value;
	document.getElementById('txtESALS').innerHTML = "<strong>" + "Número de ejes equivalentes (ESAL´S): " + "</strong>" + recibeESALS + " vehiculos";
	if((recibeTMDA === "")&&(reciber === "")&&(recibePD === "")&&(recibeD === "")&&(recibeSN === "")){
		$(".ESALS_flex").hide();
		$("#aviso_ESALS").hide();
		var tab_drenaje_base = 1
		var tab_drenaje_subbase = 2
	} else {
	$(".ESALS_flex").show();
	$("#aviso_ESALS").hide();
	var tab_drenaje_base = 2
	var tab_drenaje_subbase = 3
}
	//FIN

	//Parámetros de base

	var recibepropbase = $("#base_caracteristicas_td").text();
	if (recibepropbase == "CBR") {
		var unidadbase = "%";
	} else {
		var unidadbase = "";
	}

	var recibepropvbase = document.getElementById('base_caracteristicas').value;
	document.getElementById('txt_propiedad_base').innerHTML = "<strong>" + recibepropbase + ": " + "</strong>" + recibepropvbase + unidadbase;

	var recibea2 = document.getElementById('a2').value;

	document.getElementById('txt_a2').innerHTML = "<strong>" + "Coeficiente estructural (a2): " + "</strong>" + recibea2;
	var recibeMb = document.getElementById('Mb').value;
	document.getElementById('txtMb').innerHTML = "<strong>" + "Módulo resiliente (Mb): " + "</strong>" + recibeMb + " psi";
	document.getElementById('print_PropiedadBase').innerHTML = "En la figura 1 se observa que con el valor correspondiente de " + recibepropbase + " igual a " + recibepropvbase + unidadbase + " se traza una horizontal y se obtiene el valor de coeficiente estructural a<sub>2</sub> igual a " + "<strong>" + recibea2 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMb + " psi" + "</strong>";
	var recibecd = document.getElementById('select_drenaje_base').value;
	document.getElementById('txt_cd_base').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecd;
	var recibeps = document.getElementById('porcentaje_humedad_m2').value;
	document.getElementById('txt_porcentajeHumedad_base').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibeps;
	var recibem2 = document.getElementById('m2').value;
	document.getElementById('txt_m2').innerHTML = "<strong>" + "Coeficiente de drenaje de base (m2): " + "</strong>" + recibem2;
	document.getElementById('explicacionDrenaje_base').innerHTML = "Para la determinación de este parámetro se emplea la tabla " +tab_drenaje_base+ ", la misma que está en función de la calidad del drenaje y el porcentaje de tiempo de exposición de la estructura del pavimento a nivel de humedades próximas a la saturación. En este caso la calidad del drenaje es " + recibecd + " y, el porcentaje de tiempo de exposición de la estructura es del " + recibeps + "%," + " a partir de estos datos se ubica un rango de la tabla como se muestra a continuación."
	document.getElementById('tab_drenaje_base').innerHTML = "Tabla " + tab_drenaje_base + ". Valores de coeficiente de drenaje."
	//FIN

	//Parámetros de subbase

	var recibepropsbase = $("#subbase_caracteristicas_td").text();
	if (recibepropsbase == "CBR") {
		var unidadsbase = "%";
	} else {
		var unidadsbase = "";
	}

	var recibepropvsbase = document.getElementById('subbase_caracteristicas').value;
	document.getElementById('txt_propiedad_subbase').innerHTML = "<strong>" + recibepropsbase + ": " + "</strong>" + recibepropvsbase + unidadsbase;
	var recibea3 = document.getElementById('a3').value;
	document.getElementById('txt_a3').innerHTML = "<strong>" + "Coeficiente estructural (a3): " + "</strong>" + recibea3;
	var recibeMsb = document.getElementById('Msb').value;
	document.getElementById('txtMsb').innerHTML = "<strong>" + "Módulo resiliente (Msb): " + "</strong>" + recibeMsb + " psi";
	document.getElementById('print_PropiedadSubbase').innerHTML = "En la figura 2 se observa que con el valor correspondiente de " + recibepropsbase + " igual a " + recibepropvsbase + unidadsbase + " se traza una horizontal y se obtiene el valor de coeficiente estructural a<sub>3</sub> igual a " + "<strong>" + recibea3 + "</strong>" + " y un módulo de resiliencia igual a " + "<strong>" + recibeMsb + " psi" + "</strong>";
	var recibecds = document.getElementById('select_drenaje_subbase').value;
	document.getElementById('txt_cd_subbase').innerHTML = "<strong>" + "Calidad del drenaje: " + "</strong>" + recibecds;
	var recibepss = document.getElementById('porcentaje_humedad_m3').value;
	document.getElementById('txt_porcentajeHumedad_subbase').innerHTML = "<strong>" + "Porcentaje de exposición de humedad próximos a la saturación: " + "</strong>" + recibepss;
	var recibem3 = document.getElementById('m3').value;
	document.getElementById('txt_m3').innerHTML = "<strong>" + "Coeficiente de drenaje de subbase (m3): " + "</strong>" + recibem3;
	document.getElementById('explicacionDrenaje_subbase').innerHTML = "Para la capa de subbase la calidad del drenaje es " + recibecds + " y, el porcentaje de tiempo de exposición de la estructura es del " + recibepss  + "%," + " a partir de estos datos se ubica un rango de la tabla como se muestra a continuación en la tabla " + tab_drenaje_subbase +"."
	document.getElementById('tab_drenaje_subbase').innerHTML = "Tabla " + tab_drenaje_subbase + ". Valores de coeficiente de drenaje."
	//FIN

	//Parámetros de subrasante
	var recibeCBR = document.getElementById('subrasante_caracteristicas_flexible').value;
	document.getElementById('txt_CBR_subrasante').innerHTML = "<strong>" + "CBR: " + "</strong>" + recibeCBR + " %";
	var recibeMr = document.getElementById('Mr').value;
	document.getElementById('txtMr').innerHTML = "<strong>" + "Módulo resiliente (Mr): " + "</strong>" + recibeMr + " psi";
	var varsubr = parseFloat($('#subrasante_caracteristicas_flexible').val());
    if ((varsubr < 7.2)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = 1500 * CBR"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = 1500 * " + "(" +recibeCBR+ "%) = " + recibeMr + " psi"

        
    } else if ((7.2 <= varsubr) && (varsubr <= 20)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = 3000 * CBR"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = 3000 * " + "(" +recibeCBR+ "%) = " + recibeMr + " psi"
        
    } else if ((20 < varsubr) && (varsubr <= 100)) {
		document.getElementById('MrEcuacion_flex').innerHTML = "Mr = (4326 * Log(CBR^0.65))+241"
		document.getElementById('MrProceso_flex').innerHTML = "Mr = (4326 * Log("+"(" +recibeCBR+ "%)"+"^0.65))+241 = " + recibeMr + " psi"
        
        
	} 
	//FIN

	//Parámetros de asfalto
	var recibeMe = document.getElementById('modulo_elastico_asfalto').value;
	document.getElementById('txt_Me').innerHTML = "<strong>" + "Módulo elástico: " + "</strong>" + recibeMe + " psi";
	var recibea1 = document.getElementById('a1').value;
	document.getElementById('txt_a1').innerHTML = "<strong>" + "Coeficiente estructural (a1): " + "</strong>" + recibea1;
	document.getElementById('print_PropiedadModuloElastico').innerHTML = "Para determinar el coeficiente estructural de carpeta asfáltica en función del módulo elástico se emplea el ábaco ilustrado en la figura 3, en dicho ábaco con el valor correspondiente de módulo elástico igual a " + "<strong>" + recibeMe + " psi" + "</strong>" + " se traza una vertical hasta llegar a la curva, y luego una horizontal hasta llegar al eje vertical que corresponde a los valores de coeficientes estructurales, en este caso el coeficiente estructural a<sub>1</sub> es igual a " + "<strong>" + recibea1 + "</strong>";
	//FIN

	//Resultados
	var recibeSN3 = document.getElementById('sn3').value;
	document.getElementById('txtSN3').innerHTML = "<strong>" + "Número estructural total requerido (SN3): " + "</strong>" + recibeSN3;
	var recibeSN2 = document.getElementById('sn2').value;
	document.getElementById('txtSN2').innerHTML = "<strong>" + "Número estructural base y carpeta asfáltica (SN2): " + "</strong>" + recibeSN2;
	var recibeSN1 = document.getElementById('sn1').value;
	document.getElementById('txtSN1').innerHTML = "<strong>" + "Número estructural carpeta asfáltica (SN1): " + "</strong>" + recibeSN1;

	var recibeeA = document.getElementById('espesor_asfalto_clc').value;
	document.getElementById('txt_espesor_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeeA + " plg";
	var recibeeB = document.getElementById('espesor_base_clc').value;
	document.getElementById('txt_espesor_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeeB + " plg";
	var recibeeSB = document.getElementById('espesor_subbase_clc').value;
	document.getElementById('txt_espesor_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeeSB + " plg";

	var recibeecA = document.getElementById('espesor_asfalto_recomendado').value;
	document.getElementById('txt_espesor_recomendado_asfalto').innerHTML = "<strong>" + "Espesor de carpeta asfáltica: " + "</strong>" + recibeecA + " plg";
	var recibeecB = document.getElementById('espesor_base_recomendado').value;
	document.getElementById('txt_espesor_recomendado_base').innerHTML = "<strong>" + "Espesor de base: " + "</strong>" + recibeecB + " plg";
	var recibeecSB = document.getElementById('espesor_subbase_recomendado').value;
	document.getElementById('txt_espesor_recomendado_subbase').innerHTML = "<strong>" + "Espesor de subbase: " + "</strong>" + recibeecSB + " plg";
	
	document.getElementById('explicacionSn').innerHTML = "El método gráfico permite determinar los números estructurales de las capas con el ábaco que se ilustra en la figura 4, el cual está en función de parámetros como la confiabilidad (R), desviación estándar (So), número de ejes equivalentes (ESAL´S), módulo resiliente de la capa (Mr) y el índice de serviciabilidad (Δpsi)."
	document.getElementById('print_SN').innerHTML = "Para el trazado de este ábaco se debe empezar ubicando el valor correspondiente de confiabilidad el cual es igual a " + recibeconfi + ", luego se traza una diagonal que pase por un punto con el valor igual a " + recibeSo + " del eje de la desviación estándar y llegue a la línea de paso, desde ese punto se traza una diagonal pasando por el eje de número de ejes equivalente ubicando un valor igual a " + recibeESALS + ", y que llegue hasta a la línea de paso, a partir de este punto se traza otra diagonal que pasa por el eje del módulo de resiliencia y llega al borde vertical de la cuadricula, cabe mencionar que en este tramo del trazado pueden ser hasta 3 diagonales cada una a su respectivo módulo de resiliencia, finalmente a partir del último punto se traza una horizontal hasta ubicar el valor correspondiente al índice de serviciabilidad, y luego se traza una vertical hasta el eje del número estructural.";
	//FIN
	document.getElementById('graphics8').style.display = 'none';
	document.getElementById('graphics9').style.display = 'none';
	document.getElementById('graphics10').style.display = 'none';
	document.getElementById('graphics11').style.display = 'none';

	var printme1 = document.getElementById("titulo_principal_reporte");
	var printme2 = document.getElementById("print_proceso_Trafico");
	var printme3 = document.getElementById("titulo_drenajeBase_reporte");
	var printme4 = document.getElementById("print_drenaje_base");
	var printme5 = document.getElementById("titulo_drenajeSubbase_reporte");
	var printme6 = document.getElementById("print_drenaje_subbase");
	var printme7 = document.getElementById("titulo_graficaBase_reporte");
	var printme8 = document.getElementById("titulo_graficaSubbase_reporte");

	var contmat = $("#bcont").text();
	if (contmat == ("Base granular")) {
		var canvas_chartBase = document.getElementById('chartGranular');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	} else if (contmat == ("Base tratada con cemento")) {
		var canvas_chartBase = document.getElementById('chartCemento');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	} else if (contmat == ("Base tratada con asfálto")) {
		var canvas_chartBase = document.getElementById('chartBituminoso');
		var URL_chartBase = canvas_chartBase.toDataURL('image1/jpeg');
		document.getElementById('copy_carta_base').src = URL_chartBase;
	}

	var canvas_chartSubbase = document.getElementById('chart_subbase_Granular');
	var URL_chartSubbase = canvas_chartSubbase.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_subbase').src = URL_chartSubbase;

	var canvas_chartModuloElastico = document.getElementById('chart_moduloElastico');
	var URL_chartModuloElastico = canvas_chartModuloElastico.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_ModuloElastico').src = URL_chartModuloElastico;

	var canvas_chartSN = document.getElementById('chartSN');
	var URL_canvas_chartSN = canvas_chartSN.toDataURL('image1/jpeg');
	document.getElementById('copy_carta_SN').src = URL_canvas_chartSN;

	var printme9 = document.getElementById("titulo_graficaModuloElastico_reporte");
	var printme10 = document.getElementById("titulo_graficaSN_reporte");

	var printme11 = document.getElementById("titulo_clcSN_reporte");
	var printme12 = document.getElementById("copySN");
	var printme13 = document.getElementById("titulo_clcEspesor_reporte");
	var printme14 = document.getElementById("copyEspesor");

	var caratula = document.getElementById("ReporteCaratula");
	var declaracion = document.getElementById("ReporteDeclaracion");
	var wme = window.open('', 'Print-Window');

	
	wme.document.write('<html><head><style type="text/css"> @media print {@page {margin: 20mm 25mm 20mm 25mm;  }   } a:link {color:black; text-decoration: none} a:visited {color:black; text-decoration: none} a:active {color:black; text-decoration: none} a:hover {color:black; text-decoration: none}   </style> </head><body onload="window.print()" >' + caratula.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + declaracion.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme0.innerHTML + '<p style = "page-break-after: always;"> &nbsp; </ p>' + printme1.innerHTML + printme2.innerHTML + printme3.innerHTML + printme4.innerHTML + printme5.innerHTML + printme6.innerHTML + printme7.innerHTML + printme8.innerHTML + printme9.innerHTML + printme10.innerHTML + printme11.innerHTML + printme12.innerHTML + printme13.innerHTML + printme14.innerHTML + '</body></html>');

	wme.document.close($("#aviso_ESALS").show());
	

	setTimeout(function () {
		wme.close();
	}, 10);

}