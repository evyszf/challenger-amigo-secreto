// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    
    if (nomeAmigo !== '') {
        // Adiciona o nome do amigo no array
        amigos.push(nomeAmigo);

        // Limpa o campo de entrada
        document.getElementById('amigo').value = '';

        // Atualiza a lista exibida na tela
        atualizarListaAmigos();

    } else {
        alert('Por favor, digite um nome válido!');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAtt = document.getElementById('listaAmigos');
    listaAtt.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo a lista exibida
    amigos.forEach(function(amigo) {
        let itemLista = document.createElement('li');
        itemLista.innerHTML = amigo;
        listaAtt.appendChild(itemLista);
    });
}

// Função para sortear um único amigo secreto aleatório
function sortearAmigo() {
    // Verifica se há pelo menos 1 amigo na lista
    if (amigos.length === 0) {
        alert('Por favor, insira pelo menos 1 amigo!');
        return;
    }

    // Sorteia um amigo aleatório da lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio na tela
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpa resultados anteriores

    let itemResultado = document.createElement('li');
    itemResultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
    listaResultado.appendChild(itemResultado);
}

