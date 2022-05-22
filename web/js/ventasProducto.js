$(document).ready(() => {

    let urlBase = "http://localhost:8081/FarmaciaParcial4/"
    let header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    }

    let listarProductos = () => {
        $.post({
            url: urlBase + "/api/empleado/buscar-empleado",
            headers: header,
            data: JSON.stringify(data)
        }).done((response) => {
            
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log("Error: " + textStatus + " detalle: " + errorThrown, " FF " + jqXHR);
        })
    }
    
    listarProductos()

    $("#guardar").click((e) => {
        e.preventDefault();
        let data = {
            producto: {
                idDepto: $("#producto").val()
            },
            descripcion: $("#Producto").val(),
            total: $("#total").val()
        }
        $.post({
            url: urlBase+"/api/empleado/empleado",
            data: data
        }).done((response) => {
            console.log(response)
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log("Error: " + textStatus + " detalle: " + errorThrown, " FF " + jqXHR);
        })

        alert("Datos ingresados")
    })

})