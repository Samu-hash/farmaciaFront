$(document).ready(() => {
    
     /*   $("#guardar").click((e) => {
     e.preventDefault()
     
     let data = {
     idproducto: {
     idproducto: $("#id").val()
     },
     producto: $("#producto").val(),
     descripcion: $("#descripcion").val(),
     cantidad: $("#cantidad").val(),
     precio: $("#precio").val(),
     fechaIngreso: $("#fecha").val(),
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
     })
     */
     
        let urlBase = "http://localhost:8081/FarmaciaParcial4/"
    let header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    }
     
     
     
     
     
     
     
     let listarproductos = () => {
        $("#tabla-productos tbody").html('')
        $.post({
            url: urlBase + "api/Productos/lista",
            headers: header,
            data: JSON.stringify(data)
        }).done((response) => {
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                let row = `<tr>
                        <td>${response[i].ID}</td>
                        <td>${response[i].Producto}</td>
                        <td>${response[i].Descripcion}</td>
                        <td>${response[i].Precio}</td>
                        <td>${response[i].Existencias}</td>
                        <td>${response[i].estado == 1 ? 'Activo' : 'Inactivo'}</td>
                        <td><button type="button" id='actualizar-${i}' class="btn btn-warning">Actualizar</button></td> 
                </tr>`
                $("#tabla-clientes tbody").append(row)
            }
        }).fail((jqXHR, textStatus, errorThrown) => {
            alert("Error: " + textStatus + " detalle: " + errorThrown, " FF " + jqXHR)
        })
    }
     
     
     
     
     
     
     





})