exibirNumeros(2000);

function exibirNumeros(limite){
    tabelaHTML = '<table class="a">';
    for(var numero = 2; numero <= limite; numero++) {
        var primo = true;

        for(var divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0) {
                primo = false;
            }
        }

        if(Boolean(primo)) {
            tabelaHTML += "<td bgcolor='#00c10c'>" + numero;
        }

    }
    tabelaHTML += '</table>';
    document.write(tabelaHTML)
}