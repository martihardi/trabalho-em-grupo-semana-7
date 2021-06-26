exibirNumeros(2000);

function exibirNumeros(limite){
    tabelaHTML = '<table class="a">';
    for(var numero = 1; numero <= limite; numero++) {
        var primo = true;

        for(var divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0) {
                primo = false;
                tabelaHTML += '<td>' + numero;
                break;
            }
        }

        if(Boolean(primo)) {
            tabelaHTML += "<td bgcolor='#6699FF'>" + numero;
        }
       numero % 15 == 0 ? (tabelaHTML += '<tr>') : false;
    }
    tabelaHTML += '</table>';
    document.write(tabelaHTML)
}