function divisionCuotas(importe,cuotas){
    return importe / cuotas ; 
}

function interesTarjetas(importe){
    return importe*1.25 ; 
}

function descuentoEfectivo(importe){
    return importe*0.9 ;
}

let formaPago = prompt('Ingrese el medio de pago que desea: ');
    formaPago = formaPago.toLowerCase();

let importe = parseInt(prompt('Ingrese el monto a cobrar: '));

if (formaPago == "credito"){
    if (importe >= 1500){
        do{
            let cuotas = parseInt(prompt('Nuestros medio de pago para este monto son: 1, 2, 6 o 12 cuotas '));
            
            switch (cuotas){
                case 1 : alert('Seleciono 1 cuota el importe final es de: ' + divisionCuotas(importe,1))
                    break;
                case 2 : alert('Seleciono 2 cuotas el importe final es de: ' + divisionCuotas(importe,cuotas))
                    break;
                case 6 : alert('Seleciono 6 cuotas el importe final es de: ' + divisionCuotas(importe,cuotas))
                    break;
                case 12 : alert('Seleciono 12 cuotas el importe final es de: ' + divisionCuotas(importe,cuotas))
                    break;
                default: alert('Numero de cuotas invalido');
                    cuotas = parseInt(prompt('Ingrese un valor valido de cuotas'));
                    break;
            }
        }while(parseInt(cuotas));
    }
}
else{
    if (formaPago == "debito"){

        let tipoTarjeta = prompt('Ingrese su sucursal de banco: ');
            tipoTarjeta = tipoTarjeta.toLowerCase();

        while(tipoTarjeta != "ESC"){
            switch(tipoTarjeta){
                case "santander":
                    alert('Monto final a pagar: ' + importe);
                    break;
                case "nacion":
                    alert('Monto final a pagar: ' + importe);
                    break;
                case "provincia":
                    alert('Monto final a pagar: ' + importe);
                    break;
                case "galicia":
                    alert('Monto final a pagar: ' + importe);
                    break;
                default:
                    alert('Tiene un interes de 15%');
                    let continuar = (prompt('continuar?'));
                    if(continuar == "si"){
                        alert('Monto final a pagar: ' + interesTarjetas(importe));
                        break;
                    }
                    else{
                        tipoTarjeta = prompt('Ingrese su banco');           
                    }
                    break;
            }
            break;
        }
    }
    else{
        alert('Pague por caja un total de: ' + "$" + descuentoEfectivo(importe) + " pesos");
    }
}