/* AGREGAR NUEVA FILA JQUERY*/
  $(document).ready(function(){
    $("#agregarFila").click(function(){
        /* CARNET ALEATORIO CON LOS DATOS ESTABLECIDOS */
        const carnetRandom = Math.floor(Math.random() * 10000) + 2024000;
        // LISTA DE NOMBRES QUE PUEDEN APARECER EN LA TABLA
        const nombresRandom = 
        ["Guadalupe Alvarez", "Liliana Gonzales", "Joshua Alonzo",
        "Diego Gutierrez", "Andre Cordon", "Michelle Cohn",
        "Erick Santos", "Yeimi Castillo", "Andrea Meza"];
        const nameRandom = nombresRandom[Math.floor(Math.random() * nombresRandom.length)];

        // EMAIL ALEATORIO CON EL NOMBRE DE USUARIO Y APELLIDO
        const emailRandom = `${nameRandom.split(" ")[0].toLowerCase()}.${nameRandom.split(" ")[1].toLowerCase()}@gmail.com`;

        // CREAR UNA NUEVA FILA
        const nuevaFila = $("<tr></tr>");

        // CREAR LA TABLA Y AGREGAR LOS DATOS ALEATORIOS
        const celdaCarnet = $("<td style='background-color: white;'></td>").text(carnetRandom);
        const celdaNombre = $("<td style='background-color: white;'></td>").text(nameRandom);
        const celdaEmail = $("<td style='background-color: white;'></td>").text(emailRandom);

        // AGREGAR LOS ELEMENTOS DE DATOS A LA FILA
        nuevaFila.append(celdaCarnet, celdaNombre, celdaEmail);
        // AGREGAR LOS ELEMENTOS DE DATOS AL TBODY
        $("#datosEstudiantes").append(nuevaFila);

    })
  });


  /* ELIMINAR LA ULTIMA FILA JQUERY*/

  $(document).ready(function(){
    $("#eliminarFila").click(function(){
        // VERIFICAR SI HAY FILAS EN LA TABLA
        if($("#datosEstudiantes tr").length > 0 ){
            // ELIMINAR USANDO JQUERY REMOVE
            $("#datosEstudiantes tr:last").remove();
        } else {
            alert("No se encontraron filas para eliminar");
        }
    });
  });

  