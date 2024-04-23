
/* CUANDO EL DOCUMENTO ESTE LISTO SE USA */

$(document).ready(function(){
    // codigo (variables, metodos, etc de jquery)
    $("#btn_mostrar").click(function(){
        $("p").show();
    });
    $("#btn_ocultar").click(function(){
        $("p").hide();
        // $("#p7").show();
    });
    $("#btn_mostrar_despacio").click(function(){
        // show("slow ") o colocar tiempo en milisegundos
        // 1000 = 1 segundo
        $("p").show(5000);
    });
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide(5000);
        // $("#p7").show();

    });
    $("#btn_mostrar_rapido").click(function(){
        // Duración en milisegundos (200 ms = 0.1 segundos)
        $("p").fadeIn(200);
    });
    $("#btn_ocultar_rapido").click(function(){
        $("p").fadeOut(200);
    });

    /* ocultar como silde up */
    $("#btn_ocultar_slideup").click(function(){
        $("p").slideUp(2000); // Duración en milisegundos (2000 ms = 2 segundos)
    });

    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000); // Duración en milisegundos (2000 ms = 2 segundos)
    });

    /* $("#btn_slide_toogle").click(function(){
        $("p").slideToggle();
        $("#p7").show(500);
        $("#p7").text("Este elemento no se oculto");

        let suma = parseFloat($("#txtNumero").val())+100;
        $("#p7").text("la suma de " + $("#txtNumero").val() + " + 100 es: " + suma);
    }); */

    

});

