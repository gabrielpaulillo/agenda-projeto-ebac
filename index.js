const form = document.getElementById('form');
const inputNomeContato = document.getElementById('form__nome-contato');
const inputNumeroContato = document.getElementById('form__numero-contato');
let linhas = " ";

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    limpaCampo();
})

function adicionaLinha() {
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function limpaCampo() {
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}