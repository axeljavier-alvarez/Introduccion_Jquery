$(document).ready(function() {
    // Contar letras del nombre
    $("#btnContarLetras").click(function() {
        var nombre = $("#nombre").val();
        var cantidadLetras = nombre.length;
        $("#resultados").html("El nombre tiene " + cantidadLetras + " letras");
    });

    // Calcular promedio y mostrar resultado
    $("#btnCalcularPromedio").click(function() {
        var nota1 = parseFloat($("#nota1").val());
        var nota2 = parseFloat($("#nota2").val());
        var nota3 = parseFloat($("#nota3").val());

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            $("#resultados").html("Ingrese valores numéricos válidos para las notas");
            return;
        }

        var promedio = (nota1 + nota2 + nota3) / 3;
        var resultado = "Promedio: " + promedio.toFixed(2);

        if (promedio >= 70) {
            resultado += " - Aprobado";
        } else {
            resultado += " - Reprobado";
        }

        $("#resultados").html(resultado);
    });
});