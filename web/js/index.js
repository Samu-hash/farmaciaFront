$(document).ready(() => {

    /*$("#guardar").click((e) => {
     e.preventDefault()
     
     let data = {
     departamento: {
     idDepto: $("#depto").val()
     },
     nombres: $("#nombre").val(),
     fechaIngreso: $("#fecha").val(),
     dui: $("#dui").val(),
     nit: $("#nit").val(),
     direccion: $("#direccion").val(),
     telefono: $("#telefono").val(),
     salario: $("#salario").val()
     }
     $.post({
     url: "http://localhost:8081/parcial2/api/empleado/empleado",
     data: data
     }).done((response) => {
     
     console.log(response)
     
     }).fail((jqXHR, textStatus, errorThrown) => {
     console.log("Error: " + textStatus + " detalle: " + errorThrown, " FF " + jqXHR);
     })
     
     alert("Datos ingresados")
     })*/

    $("#consultar").click((e) => {
        e.preventDefault()
        let depto = $("#tipo").val();
        let data = {
            idEmpleado: (depto === ("ID") ? $("#parametro").val() : 0),
            nombre: (depto === ("NO") ? $("#parametro").val() : ""),
            dui: (depto === ("DU") ? $("#parametro").val() : ""),
            depto: (depto === ("DE") ? $("#parametro").val() : ""),
            tipoBusqueda: depto
        }
        let header = {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        }
        console.log(data)
        console.log(JSON.stringify(data))
        $.post({
            url: "http://localhost:8081/parcial2/api/empleado/buscar-empleado",
            headers: header,
            data: JSON.stringify(data)
        }).done((response) => {

            console.log(response)

        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log("Error: " + textStatus + " detalle: " + errorThrown, " FF " + jqXHR);
        })
    })


})