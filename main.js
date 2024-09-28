// Pegando dados do Form:
const formulario = document.getElementById('formulario');
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');
const selectSexo = document.getElementById('seleção-sexo');
// ----

// Pegando Imagens:
const imgHomem = '<img src="./images/Homem.png"/>';
const imgMulher = '<img src="./images/Mulher.png"/>';
// ----

// Array para Nome/Numero, linhas tabela.
const nome = [];
const numero = [];

let linhas = ''; // Inserir informações na tabela
// ----



formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    InserindoContatosComValidação();
    limpandoTela();
});


function InserindoContatosComValidação(){
    
    if (nome.includes(inputNomeContato.value)){
        alert(`Erro: O Nome "${inputNomeContato.value}" já existe.`);
    } else if (numero.includes(inputNumeroContato.value)){
        alert(`Erro: O Numero "${inputNumeroContato.value}" já existe.`);
    } else {
        let linha = '<tr>'; 
        linha += `<td>${selectSexo.value === 'Homem' ? imgHomem : imgMulher}</td>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

        nome.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);
    }
}

function limpandoTela (){
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    selectSexo.value = '';
}