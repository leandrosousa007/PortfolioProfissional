function mostrarFormulario() {
    document.querySelector(".center-container").style.display = "none"; // Esconde o botão inicial
    document.getElementById("cep-section").style.display = "block"; // Exibe a seção de CEP
}

function voltar() {
    document.querySelector(".center-container").style.display = "flex"; // Exibe novamente o botão inicial
    document.getElementById("cep-section").style.display = "none"; // Esconde a seção de CEP
}

function buscarCEP() {
    var cep = document.getElementById('cep-input').value.replace(/\D/g, '');
    if (cep.length === 8) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            if (!data.erro) {
                document.getElementById('logradouro').innerHTML = data.logradouro;
                document.getElementById('complemento').textContent = data.complemento;
                document.getElementById('bairro').textContent = data.bairro;
                document.getElementById('localidade').textContent = data.localidade;
                document.getElementById('uf').textContent = data.uf;
            } else {
                document.getElementById('endereco-info').innerHTML = '<li>CEP não encontrado.</li>';
            }
        };
        xhr.onerror = function() {
            document.getElementById('endereco-info').innerHTML = '<li>Erro ao buscar o CEP. Tente novamente mais tarde.</li>';
        };
        xhr.send();
    } else {
        document.getElementById('endereco-info').innerHTML = '<li>CEP inválido. Digite um CEP válido com 8 dígitos.</li>';
    }
}

function limparDados() {
    document.getElementById('cep-input').value = '';
    document.getElementById('logradouro').textContent = '';
    document.getElementById('complemento').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('localidade').textContent = '';
    document.getElementById('uf').textContent = '';
}