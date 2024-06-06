function pesquisarCodigo() {
    const codigo = document.getElementById('codigoProduto').value;
    let nomeProduto;

    if (codigo === '') {
        nomeProduto = 'Por favor, insira um código válido.';
    } else if (codigo === '001') {
        nomeProduto = 'Parafuso';
    } else if (codigo === '002') {
        nomeProduto = 'Porca';
    } else if (codigo === '003') {
        nomeProduto = 'Prego';
    } else {
        nomeProduto = "Diversos";
    }

    document.getElementById('resultado').innerText = 'Produto: ' + nomeProduto;
}