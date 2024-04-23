$(document).ready(function(){

    // SE LLAMA POR EL ID AL BOTON DE CONTAR LETRAS
    $("#btnContarLetras").click(function(){
        var nombre = $("#nombre").val();
        var cantidadLetras = nombre.length;

        $("#resultados").html("El nombre tiene " + cantidadLetras + " letras");
    });

    // BOTON PARA CALCULAR PROMEDIO
    $("#btnCalcularPromedio").click(function(){
        // Mandar a llamar a las notas
        var nota1 = parseFloat($("#nota1").val());
        var nota2 = parseFloat($("#nota2").val());
        var nota3 = parseFloat($("#nota3").val());

        // SOLO SI EL VALOR NO ES NUMERICO
        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
            $("#resultados").html("Solo se aceptan valores numéricos validos");
            return;
        }

        var promedio = (nota1+nota2+nota3) / 3;
        // el promedio tendra 2 decimales
        var resultado = "Promedio: " + promedio.toFixed(2);

        // MOSTRAR MENSAJE DE APROBADO O REPROBADO
        if(promedio >=70){
            // += para imprimir un mensaje de aprobado o reprobado
            resultado += " -APROBADO";
        } else {
            resultado += " -REPROBADO";
        }

        // imprimir resultado
        $("#resultados").html(resultado);

    });
});





